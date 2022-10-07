import React from "react";
import "./SlidesHTml.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img4 from "./img2.webp";
import img3 from "./img3.webp";
import img5 from "./img5.jpg";
function SlidesHTml() {
  const imgs = [img1, img2, img3, img4];
  return (
    <>
      <div className="container_Slides">
        <div className="img_c">
          <img src={img5} className={"img_Slider"} alt="" />
        </div>
      </div>

    </>
  );
}

export default SlidesHTml;
