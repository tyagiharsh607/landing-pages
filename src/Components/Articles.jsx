import React from "react";
import ArticleBanner from "./ArticleBanner";

const Articles = () => {
  return (
    <div className="articles">
      <h1>Spotlight Articles</h1>
      <p>
        Explore the inspiring journey of our startups & products from its
        inception to its current success.
      </p>
      <div className="banners grid-container">
        <ArticleBanner className="grid-item" />
        <ArticleBanner className="grid-item" />
        <ArticleBanner className="grid-item" />
        <ArticleBanner className="grid-item" />
      </div>
    </div>
  );
};

export default Articles;
