import React from "react";
import urls from "../res/urls";
import strings from "../res/strings";
import images from "../res/images";

export default function MyPdfViewer() {
  return (
    <div className="MyPdfViewerWrapper">
      <div className="Container">
        <img
          className="ResumePicture"
          src={images.mypdfviewer.resume}
          alt={strings.mypdfviewer.filename}
        />
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
