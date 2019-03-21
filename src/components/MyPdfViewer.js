import React from "react";
import { Document, Page } from "react-pdf";
import urls from "../res/urls";
import { pdfjs } from "react-pdf";
import strings from "../res/strings";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true
};

export default function MyPdfViewer() {
  return (
    <div className="MyPdfViewerWrapper">
      <div className="Container">
        <Document file={urls.resumePDF}>
          <Page
            options={options}
            key={1}
            pageNumber={1}
            className=""
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <a
          className="DownloadButton"
          download={strings.mypdfviewer.filename}
          href={urls.resumePDF}
        >
          {strings.mypdfviewer.download}
        </a>
      </div>
    </div>
  );
}
