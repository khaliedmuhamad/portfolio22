import React, { useState } from "react";
import "./Work.css";
import Navbar from "../../componants/navbar/navbar";
import { Link } from "react-router-dom";

export default function Work() {
  const [dark, setDark] = useState();



  const [data] = useState([
    {
      content: "web development ",
      href: "web-development",
      bg: "916BBF",
      imgSrc: "web",
    },
    {
      content: "excel sheets ",
      href: "",
      bg: "3D2C8D",
      imgSrc: "excel",
    },
    {
      content: "Mechaniacal Engineering ",
      href: "",
      bg: "1C0C5B",
      imgSrc: "eng",
    },
  ]);


  return (
    <div className="page m-0 ">
      <div className={`page-overlay ${!dark ? "light" : "dark"} `}>
        <Navbar getDark={setDark} />
        <div className="content work ">
          <div className="d-flex flex-md-row flex-column">
            {data.map((e, i) => (
              <div
                key={i}
                className="work-pupples col-md-4 col-12"
                style={{ backgroundImage: `URL(/imgs/works/${e.imgSrc}.webp` }}
              >
                <Link to={`/work/${e.href}`} className="d-block">
                  <div className="overlay">
                    <div className="title w-100 h-100 text-center text-capitalize d-flex justify-content-center align-items-center">
                      {e.content}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
