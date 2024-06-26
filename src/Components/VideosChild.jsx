import React from "react";
import customer from "../Images/customer-journey-map.jpeg";
import youtube from "../Images/pngimg.com - youtube_button_PNG42.png";
import icon from "../Images/icons_163323.svg";

const VideosChild = ({ direction, align }) => {
  return (
    <div className="videos-child" style={{ "flex-direction": direction }}>
      <div className="images">
        <img src={customer} alt="" className="customer" />
        <img src={youtube} alt="" className="youtube" />
      </div>
      <div className="text" style={{ "text-align": align }}>
        <div>
          {align === "right" ? (
            <>
              <span>Buisness consulting</span>
              <img src={icon} alt="" className="icon" />
            </>
          ) : (
            <>
              <img src={icon} alt="" className="icon" />
              <span>Buisness consulting</span>
            </>
          )}
        </div>
        <h2>The Future of AI Writing: What do you want to know</h2>
      </div>
    </div>
  );
};

export default VideosChild;
