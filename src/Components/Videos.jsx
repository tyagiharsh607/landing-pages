import React from "react";

import VideosChild from "../Components/VideosChild";
const Videos = () => {
  return (
    <div className="videos">
      <h1>Spotlight Videos</h1>
      <p>
        We are thrilled to present a special of featuring your Startup, Product
        & Members , Explore about startups, products & member of our community
        who is making waves in the industry by our featured videos, podcasts,
        interviews, stories and articles in our spotlight section.
      </p>
      <VideosChild direction="row" align="left" />
      <VideosChild direction="row-reverse" align="right" />
      <VideosChild direction="row" align="left" />
      <VideosChild direction="row-reverse" align="right" />
      <hr />
    </div>
  );
};

export default Videos;
