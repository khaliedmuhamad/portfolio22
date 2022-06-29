import React, { useState, useEffect } from "react";
import "./Work.css";
import Navbar from "../../componants/navbar/navbar";
import { Link } from "react-router-dom";

export default function Work() {
  const [dark, setDark] = useState(false);

  useEffect(() => {}, [dark]);

  const [data] = useState([
    {
      content: "web development ",
      href: "web-development",
      bg: "916BBF",
      imgSrc: "web.jpg",
    },
    {
      content: "excel sheets ",
      href: "",
      bg: "3D2C8D",
      imgSrc: "excel.png",
    },
    {
      content: "Mechaniacal Engineering ",
      href: "",
      bg: "1C0C5B",
      imgSrc: "eng.jpg",
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
                style={{ backgroundImage: `URL(imgs/works/${e.imgSrc}` }}
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
