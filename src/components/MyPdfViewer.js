import React from "react";
import { Document, Page } from "react-pdf";
import urls from "../res/urls";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

export default function MyPdfViewer() {
  return (
    <div className="MyPdfViewerWrapper">
      <Document file={urls.resumepdf}>
        <Page
          pageNumber={1}
          className=""
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
