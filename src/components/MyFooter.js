import React from "react";
import urls from "../res/urls";
import strings from "../res/strings";

export default function MyFooter() {
  return (
    <div className="MyFooterWrapper">
      <div className="Design">
        <a className="Design" href={urls.eddieGithub}>
          {strings.myfooter.designedby}
        </a>
      </div>

      <div className="Links">
        <a className="Links" href={urls.projectURL}>
          {strings.myfooter.projectgithub}
        </a>
      </div>
    </div>
  );
}
