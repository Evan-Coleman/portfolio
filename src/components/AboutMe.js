import React from "react";

export default function AboutMe() {
  return (
    <div className="AboutMeWrapper row">
      <div className="col l6 m6 s12">
        <div className="Circle" />
        <div className="CircleWrapper">
          <div className="CircleHeader">about me</div>
          <div className="CircleContent">Developer,</div>
          <div className="CircleContent">Engineer,</div>
          <div className="CircleContent">Creator,</div>
          <div className="CircleContent">Thinker,</div>
        </div>
      </div>
      <div className="SideContent col l6 m6 s12">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          nesciunt voluptatibus, consequatur et maiores velit eveniet illo
          laudantium autem ad.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nisi
          harum commodi tempora maiores, eos voluptatem totam eveniet possimus?
          Veritatis pariatur suscipit porro neque qui ipsa aliquid nostrum
          aperiam in?
        </div>
      </div>
    </div>
  );
}
