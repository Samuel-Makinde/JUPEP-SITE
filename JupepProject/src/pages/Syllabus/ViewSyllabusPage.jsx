// import React, { useEffect, useState } from "react";
// import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
// // import { Document, Page, pdfjs } from "react-pdf"; 
// // import Social from "../PDF/Social.pdf"


// // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// //     'npm:pdfjs-dist/build/pdf.worker.min.js',
// //      import.meta.url,
// //    ).toString();



// const apiUrl = "https://jupeb-site-backend.onrender.com/api/v1/books";

// const viewSyllabusPage = () => {
//   const [syllabusData, setSyllabusData] = useState([]);
//   const [loadingSpinner, setLoadingSpinner] = useState(true);
//   // const [numPages, setNumPages] = useState(null); 
//   // const [pageNumber, setPageNumber] = useState(1);
  
//   const fetchSyllabus = async () => {
//     setLoadingSpinner(true);
//     try {
//       const response = await fetch(apiUrl);
//       const syllabusData = await response.json();
//       setLoadingSpinner(false);
//       setSyllabusData(syllabusData);
//     } catch (error) {
//       setLoadingSpinner(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchSyllabus();
//   }, []);


//   if (loadingSpinner) {
//     return (
//       <main>
//         <LoadingSpinner />
//       </main>
//     );
//   }

//   return (
//     <div>
//       {syllabusData.map((item) => (
//         <div key={item.id}>
//           <a href={item.book} target="_blank" rel="noopener noreferrer">
//             View Book
//           </a>
//           <img src={item.image} alt={item.picture} />
//           <p>{item.describtion}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default viewSyllabusPage;



import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.min.js"
);

const ViewSyllabusPage = () => {
  const [syllabusData, setSyllabusData] = useState([]);
  const [numPages, setNumPages] = useState(null); 
  const [pageNumber, setPageNumber] = useState(1);

  const apiUrl = "https://jupeb-site-backend.onrender.com/api/v1/books";

  const fetchSyllabus = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const syllabusData = await response.json();
        setSyllabusData(syllabusData);
      } else {
        throw new Error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchSyllabus();
  }, []);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {syllabusData.map((item) => (
        <div key={item.id}>
          <h2>{item.describtion}</h2> {/* Fixed the field name */}
          <Document
          
            file={item.book} // Assuming the API response includes a "book" field
            onLoadSuccess={handleDocumentLoadSuccess}
          >
            {item.book}
            <Page pageNumber={pageNumber} />
          </Document>
          {numPages && (
            <p>
              Page {pageNumber} of {numPages}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ViewSyllabusPage;
