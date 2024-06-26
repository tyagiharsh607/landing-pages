import React from "react";
import cover from "../Images/articlecover.jpeg";
import icon from "../Images/icons_163323.svg";

const ArticleBanner = () => {
  return (
    <div className="article-banner ">
      <img src={cover} alt="" className="hero-image" />
      <div className="text">
        <img src={icon} alt="" className="icon" />
        <span>Buisness consulting</span>
      </div>
      <h3>The Future of AI Writing: What do you want to know</h3>
    </div>
  );
};

export default ArticleBanner;
