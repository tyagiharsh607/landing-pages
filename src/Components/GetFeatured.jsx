import React from 'react'
import mike from "../Images/mike.jpeg"
import couples from "../Images/couple.jpeg"
import stories from "../Images/stories.jpeg"
import tablet from "../Images/tablet.jpeg"
import newspaper from "../Images/newspaper.jpeg"


const GetFeatured = () => {
  return (
    <div className="get-featured">
      <button>Get Featured</button>
      <div className="cards">
        <div className="card">
          <img src={mike} alt="mike" />
          <div className="text">
            <h3>Podcast</h3>
            <p>get-featured button</p>
          </div>
        </div>
        <div className="card">
          <img src={couples} alt="interview" />
          <div className="text">
            <h3>Interviews</h3>
            <p>Highlight your startup story</p>
          </div>
        </div>
        <div className="card">
          <img src={stories} alts="stories" />
          <div className="text">
            <h3>Startup Stories</h3>
            <p>Showcasing your achievements</p>
          </div>
        </div>
        <div className="card">
          <img src={tablet} alt="Feature Videos" />
          <div className="text">
            <h3>Feature Videos</h3>
            <p>Feature your brand videos</p>
          </div>
        </div>
        <div className="card">
          <img src={newspaper} alt="newspaper" />
          <div className="text">
            <h3>Feature Article</h3>
            <p>Feature your brand articles</p>
          </div>
        </div>
      </div>

      <div className="text">
        <h2>
          Thank you for being a part of our community. We’re excited to see your
          startup grow and thrive.
        </h2>
        <p>
          Join our community on social media to stay updated with the latest
          news, tips, and success stories from fellow entrepreneurs.
        </p>
      </div>
    </div>
  );
}

export default GetFeatured
