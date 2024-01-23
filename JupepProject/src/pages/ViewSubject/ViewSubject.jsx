import { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import Layout from "../../layout/Layout";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./pdf.module.css";
import AxiosInterceptor from "../../components/axiosInterceptor";
import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ViewSubject = () => {
  const [numPages, setNumPages] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [pageNumber, setPageNumber] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (!searchTerm || isNaN(searchTerm)) {
      toast.error("Please enter a valid page number.", {
        onClose: () => {
          // Handle error or provide feedback as needed
        },
      });
      return;
    }

    const targetPage = parseInt(searchTerm, 10);
    if (targetPage >= 1 && targetPage <= numPages) {
      setPageNumber(targetPage);
    } else {
      toast.error("Page number out of range.", {
        onClose: () => {
          // Handle error or provide feedback as needed
        },
      });
    }
  };

  //   const handleSearch = async () => {
  //   if (!searchTerm || isNaN(searchTerm)) {
  //     toast.error('Please enter a valid page number.', {
  //       onClose: () => {
  //         // Handle error or provide feedback as needed
  //       },
  //     });
  //     return;
  //   }

  //   // Call the targetBookPage function for each opened book
  //   books.forEach((book) => {
  //     if (book.opened) {
  //       console.log('Before targetBookPage:', book.pageNumber);
  //       targetBookPage(book);
  //     }
  //   });

  //   // Add a log to check the updated books after calling targetBookPage
  //   console.log('After targetBookPage:', books);

  //   // Now, let's update the page number
  //   const targetPage = parseInt(searchTerm, 10);
  //   if (targetPage >= 1 && targetPage <= numPages) {
  //     setPageNumber(targetPage);
  //   } else {
  //     toast.error('Page number out of range.', {
  //       onClose: () => {
  //         // Handle error or provide feedback as needed
  //       },
  //     });
  //   }
  // };

  // const targetBookPage = (book) => {
  //   const targetPage = parseInt(searchTerm, 10);

  //   if (targetPage >= 1 && targetPage <= numPages) {
  //     // Update the page number for the specific book
  //     setBooks((prevBooks) => {
  //       return prevBooks.map((b) => {
  //         if (b === book) {
  //           return {
  //             ...b,
  //             pageNumber: targetPage,
  //           };
  //         }
  //         return b;
  //       });
  //     });
  //   } else {
  //     toast.error('Page number out of range.', {
  //       onClose: () => {
  //         // Handle error or provide feedback as needed
  //       },
  //     });
  //   }
  // };

  // const handleSearch = async () => {
  //   if (!searchTerm || isNaN(searchTerm)) {
  //     toast.error('Please enter a valid page number.', {
  //       onClose: () => {
  //         // Handle error or provide feedback as needed
  //       },
  //     });
  //     return;
  //   }

  //   // Call the targetBookPage function for each opened book
  //   books.forEach((book) => {
  //     if (book.opened) {
  //       targetBookPage(book);
  //     }
  //   });
  // };

  const authFetch = AxiosInterceptor();

  // const fetchPDF = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await authFetch.get(`https://jupeb-site-backend.onrender.com/api/v1/files`);
  //     const booksData = response.data.documents.map((book) => {
  //       book.image.filePath = book.image.filePath.replace(/\/\//g, '/');
  //       book.pageNumber = 1;
  //       book.opened = false;
  //       return book;
  //     });
  //     setLoading(false);
  //     setBooks(booksData);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  const fetchPDF = async () => {
    setLoading(true);
    try {
      const response = await authFetch.get(
        "https://jupeb-site-backend.onrender.com/api/v1/files"
      );
      const booksData = response.data.documents.map((book) => {
        book.image.filePath = book.image.filePath.replace(/\/\//g, "/");
        // Initialize pageNumber for each book
        return { ...book, pageNumber: 1, opened: false };
      });
      setLoading(false);
      setBooks(booksData);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPDF();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onItemClick = ({ pageNumber: itemPageNumber }) => {
    // Update the state when an item is clicked
    setPageNumber(itemPageNumber);
  };

  const togglePdf = (book) => {
    // Toggle the state for the button associated with this book
    const updatedBooks = books.map((b) => {
      if (b === book) {
        b.opened = !b.opened;

        // Reset the page number to 1 when opening the book
        if (b.opened) {
          b.pageNumber = 1;
        }
      }
      return b;
    });
    setBooks(updatedBooks);
  };

  const changePage = (book, newPageNumber) => {
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);
      // const updatedBooks = books.map((b) => {
      //   if (b === book) {
      //     b.pageNumber = newPageNumber;
      //   }
      //   return b;
      // });
      // setBooks(updatedBooks);
    }
  };

  const handleError = () => {
    toast.error("Failed to load PDF. Please try again later.", {
      onClose: () => {
        // You can choose to navigate or handle errors differently here
      },
    });
  };

  return (
    <Layout>
      <main className={`w-full h-full pt-[80px] mb-14 ${styles}`}>
        <div className="w-full h-full flex flex-col px-4 md:px-6 lg:px-8 xl:px-12">
          {books &&
            books.map((book) => (
              <div
                key={book._id}
                className="border-[1px] border-[#bfc0c4] rounded-[10px] mt-[40px] p-4"
              >
                <div className="w-full h-full md:flex justify-between">
                  <div className="h-full flex justify-center md:flex-none">
                    <img
                      src={`https://jupeb-site-backend.onrender.com/${book.image.filePath}`}
                      alt="book image"
                      className="w-[200px] h-[200px] rounded-[10px]"
                    />
                  </div>
                  <div className="w-full h-full flex flex-col justify-center md:pl-[20px]">
                    <h1 className="text-[18px] font-bold mt-[20px] md:mt-0">
                      {book.name} TextBook
                    </h1>
                    <p className="text-[16px] text-gray-700">
                      {book.description}
                    </p>
                    <div className="w-full h-full flex flex-col md:flex-row md:justify-evenly items-center">
                      <button
                        onClick={() => togglePdf(book)}
                        className={`w-full md:w-[250px] h-[80px] text-[17px] px-2 rounded-[10px] shadow-md font-bold mt-[20px] ${
                          book.opened ? "bg-gray-300" : "bg-blue-500"
                        }`}
                      >
                        <span className="relative flex h-3 w-3 top-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                        {book.opened ? (
                          <p>Close TextBook</p>
                        ) : (
                          <p>Read {book.name} TextBook</p>
                        )}
                      </button>
                      <Link
                        to="/video-page"
                        smooth="true"
                        duration={500}
                        className="w-full text-white md:w-[250px] px-2 h-[80px] text-[17px] rounded-[10px] shadow-md font-bold mt-[20px] bg-blue-900 flex justify-center items-center"
                      >
                        <button>Watch {book.name} Videos</button>
                      </Link>
                    </div>
                  </div>
                </div>

                {book.opened && (
                  <div className="relative w-full ">
                    <div className=" flex items-center justify-center pt-[20px] ">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter page number..."
                        className="mr-2 p-2 border border-gray-500 rounded outline-none"
                      />
                      <button
                        onClick={handleSearch}
                        className="p-2 bg-blue-500 text-white rounded"
                      >
                        Search
                      </button>
                    </div>
                    <Document
                      file={`https://jupeb-site-backend.onrender.com/api/v1/files/${book._id}`}
                      loading={<LoadingSpinner />}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={handleError}
                      onItemClick={onItemClick}
                      className="flex"
                    >
                      {/* Render Table of Contents */}
                      {/* Use the state pageNumber for rendering pages */}
                      <Page pageNumber={pageNumber} />
                      <Page
                        pageNumber={pageNumber + 1}
                        className="hidden lg:flex"
                      />
                    </Document>
                    <p className="w-full text-center">
                      Page {pageNumber} of {numPages}
                    </p>

                    <button
                      onClick={() => changePage(book, pageNumber - 1)}
                      disabled={pageNumber === 1}
                      className="absolute top-[50%] left-[2%] transform -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <IoIosArrowBack size={26} className="text-blue-900" />
                    </button>
                    <button
                      onClick={() => changePage(book, pageNumber + 1)}
                      disabled={pageNumber === numPages}
                      className="absolute top-[50%] right-[2%] transform -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <IoIosArrowForward size={26} className="text-blue-900" />
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
