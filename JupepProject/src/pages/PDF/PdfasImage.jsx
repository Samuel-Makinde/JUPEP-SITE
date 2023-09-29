import { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useGlobalContext } from "../../context/AuthContext";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfasImage = () => {
  const { books } = useGlobalContext()

  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const prev = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1 >= nextPage ? pageNumber : pageNumber + 1);
  };

  return (
    <main >

    </main>
  );
};

export default PdfasImage;
