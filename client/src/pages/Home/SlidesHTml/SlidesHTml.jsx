import React, { useEffect, useState } from "react";
import "./SlidesHTml.css";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import img1 from "./banner.jpg";
import img2 from "./img5.jpg";
import img3 from "./img2.jpg";
function SlidesHTml() {
  const imgs = [img2, img3, img1];
  const [imgNum, setImgNum] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     setImgNum((imgNum) => (imgNum + 1) % 3);
  //   }, 10000);
  // }, []);
  const changeImage = (dir) => {
    setImgNum(Math.abs(imgNum + dir) % 3);
  };
  return (
    <>
      <div className="container_Slides">
        <div className="img_c">
          <div className="leftRight_IMg_Mover">
            <VscChevronLeft onClick={() => changeImage(-1)}style={{margin:"auto"}}  size={100} />
          </div>
          <img
            src={imgs[imgNum]}
            className={"img_Slider"}
            alt="Image loading..."
          />
          <div className="leftRight_IMg_Mover" style={{ right: "0" }}>
            <VscChevronRight onClick={() => changeImage(1)} style={{margin:"auto"}} size={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlidesHTml;
