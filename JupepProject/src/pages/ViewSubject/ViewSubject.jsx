import { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import axios from "axios";
import { Document, Page } from "react-pdf";
import Layout from "../../layout/Layout";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ViewSubject = () => {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showPdf, setShowPdf] = useState(false);
  const [books, setBooks] = useState([]);

  // ... (previous state and useEffect)

  // Function to handle page number change
  const changePage = (newPageNumber) => {
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);
    }
  };

  const url = "http://localhost:5000/api/v1/files";

  const fetchPDF = async () => {
    try {
      const response = await axios.get(url);
      const booksData = response.data.documents.map((book) => {
        // Remove double slashes from the image file path
        book.image.filePath = book.image.filePath.replace(/\/\//g, '/');
        return book;
      });
      console.log(booksData)
      setBooks(booksData);
      console.log(books, "this is books")
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  useEffect(() => {
    fetchPDF();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const togglePdf = (pdfUrl) => {
    if (pdfUrl) {
      setShowPdf(!showPdf);
      setPdfData(pdfUrl);
    }
  };
  return (
    <Layout>
      <main className="w-full h-full  pt-[80px] mb-14">
        <div className="w-full h-full flex flex-col px-4 md:px-6 xl:px-8">
          {books && books.map((book) => (
            <div key={book._id} className="border-[1px] border-[#bfc0c4] rounded-[10px] mt-[40px] p-4">
              <div className="w-full h-full md:flex justify-between">
                <div className="h-full flex justify-center md:flex-none">
                  <img src={`http://localhost:5000/${book.image.filePath}`} alt="book image" className="w-[200px] h-[200px] rounded-[10px]" />
                </div>
                <div className="w-full h-full flex flex-col justify-center md:pl-[20px]">
                  <h1 className="text-[18px] font-bold mt-[20px] md:mt-0">Book Description</h1>
                  <p className="text-[16px] text-gray-700">{book.description}</p>
                  <div className="w-full h-full flex justify-center items-center">
                    <button
                      onClick={() => togglePdf(book.pdf.filePath)}
                      className="w-[250px] h-[70px] text-[20px] bg-blue-300 rounded-[10px] shadow-md font-bold mt-[20px]"
                    >
                      <span className="relative flex h-3 w-3 top-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                      </span>
                      {showPdf && pdfData ? 
                        <p>Close TextBook</p>
                      : <p>Read {book.image.filename} TextBook</p>
                    }
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showPdf && pdfData && (
          <div className="relative w-[100%] h-full mt-4  ">
            <Document file={`http://localhost:5000/${pdfData}`} onLoadSuccess={onDocumentLoadSuccess} className="flex">
              <Page pageNumber={pageNumber}  />
              <Page pageNumber={pageNumber + 1} className="hidden md:flex" />
            </Document>
            <p className="w-full text-center">
              Page {pageNumber} of {numPages}
            </p>
            {/* <div className="mt-2"> */}
              <button onClick={() => changePage(pageNumber - 1)} disabled={pageNumber === 1} className="absolute top-[50%] left-[2%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <IoIosArrowBack size={26} className="text-blue-600" />
              </button>
              <button onClick={() => changePage(pageNumber + 1)} disabled={pageNumber === numPages} className="absolute top-[50%] right-[2%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <IoIosArrowForward size={26} className="text-blue-600" />
              </button>
            {/* </div> */}
          </div>
        )}
        
      </main>
    </Layout>
  );
};

export default ViewSubject;
