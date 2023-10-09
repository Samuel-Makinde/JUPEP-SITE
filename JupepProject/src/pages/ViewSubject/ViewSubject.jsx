import { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import Layout from "../../layout/Layout";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './pdf.module.css'




pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ViewSubject = () => {
  const [numPages, setNumPages] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const authFetch = axios.create({
    withCredentials: true,
})

authFetch.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 404 || error.response.status === 500) {
            navigate('/login');
        }
        return Promise.reject(error);
    }
)
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const readUrl = import.meta.env.VITE_BASE_URL_VIEW_SUBJECT;


  const url = `http://localhost:5000/api/v1/files`;

  const fetchPDF = async () => {
  setLoading(true)
    try {
      const response = await authFetch.get(url);
      const booksData = response.data.documents.map((book) => {
        book.image.filePath = book.image.filePath.replace(/\/\//g, '/');
        book.pageNumber = 1
        book.opened = false; 
        return book;
      });
      setLoading(false)
      setBooks(booksData);
    } catch (error) {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchPDF();
  }, []);

  //  const getPDF = async () => {
  //   try {
  //     const response = await fetch(`${baseUrl}/files/${book._id}`);
  //     const arrayBuffer = await response.arrayBuffer();
  //     const uint8Array = new Uint8Array(arrayBuffer);
  //     setPdfData(uint8Array);
  //   } catch (error) {
  //     console.error("Error fetching PDF:", error);
  //   }
  // };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  

  const togglePdf = (book) => {
    // Toggle the state for the button associated with this book
    const updatedBooks = books.map((b) => {
      if (b === book) {
        b.opened = !b.opened;
      } 
      // else {
      //   b.opened = false;
      // } if you want the document to close when you click on another button, with out clicking on the exact button on the map
      return b;
    });

    setBooks(updatedBooks);
  };



  const changePage = (book, newPageNumber) => {
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      const updatedBooks = books.map((b) => {
        if (b === book) {
          b.pageNumber = newPageNumber;
        }
        return b;
      });
      setBooks(updatedBooks);
    }
  };

  const handleError = ()=> {
      toast.error('Failed to load PDF. Please try again later.', {
    
    onClose: () => {
    // You can choose to navigate or handle errors differently here
  },
});
  }
  

  return (
    <Layout>
       <main className={`w-full h-full  pt-[80px] mb-14 ${styles.pdf} `}>
        <div className="w-full h-full flex flex-col px-4 md:px-6 xl:px-8">
          {books && books.map((book) => (
            <div key={book._id} className="border-[1px] border-[#bfc0c4] rounded-[10px] mt-[40px] p-4">
              <div className="w-full h-full md:flex justify-between">
                <div className="h-full flex justify-center md:flex-none">
                  <img src={`${readUrl}/${book.image.filePath}`} alt="book image" className="w-[200px] h-[200px] rounded-[10px]" />
                </div>
                <div className="w-full h-full flex flex-col justify-center md:pl-[20px]">
                  <h1 className="text-[18px] font-bold mt-[20px] md:mt-0">{book.name} TextBook</h1>
                  <p className="text-[16px] text-gray-700">{book.description}</p>
                  <div className="w-full h-full flex justify-center items-center">
                    <button
                      onClick={() => togglePdf(book)}
                      className={`w-[250px] h-[80px] text-[17px] rounded-[10px] shadow-md font-bold mt-[20px] ${
                        book.opened ? "bg-gray-300" : "bg-blue-300"
                      }`}
                    >
                      <span className="relative flex h-3 w-3 top-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                      </span>
                      {book.opened ? 
                        <p>Close TextBook</p>
                      : <p>Read {book.name} TextBook</p>
                      }
                    </button>
                  </div>
                </div>
              </div>
              {book.opened && (
                <div className="relative w-[100%] h-full mt-4 select-none cursor-not-allowed -m-6 ">
                  <Document file={`http://localhost:5000/api/v1/files/${book._id}`} loading={<LoadingSpinner />} onLoadSuccess={onDocumentLoadSuccess}  onLoadError={handleError} className='flex' 
                  >
                    <Page pageNumber={book.pageNumber}  />
                    <Page pageNumber={book.pageNumber + 1} className="hidden lg:flex" />
                  </Document>
                  <p className="w-full text-center">
                    Page {book.pageNumber} of {numPages}
                  </p>
                  <button onClick={() => changePage(book, book.pageNumber - 1)} disabled={book.pageNumber === 1} className="absolute top-[50%] left-[2%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <IoIosArrowBack size={26} className="text-blue-600" />
                  </button>
                  <button onClick={() => changePage(book, book.pageNumber + 1)} disabled={book.pageNumber === numPages} className="absolute top-[50%] right-[2%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <IoIosArrowForward size={26} className="text-blue-600" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      {loading && <LoadingSpinner />}

      </main>
    </Layout>
  );
};

export default ViewSubject;