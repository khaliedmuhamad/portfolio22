import React, { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiMechanicGarage } from "react-icons/gi";
import { SiMicrosoftexcel } from "react-icons/si";
import { RiFootballFill } from "react-icons/ri";
import Carousel from "../../componants/carousel/carousel";
import Navbar from "../../componants/navbar/navbar";
import Sociallinks from "../../componants/sociallinks/sociallinks";
import "./home.css";
import linearS from "./lines";
function Home() {
  const [carrers] = useState([
    {
      data: "full stack developer",
      path:"/imgs/avtars",
      imgSrc: "full",
      icon: <FaLaptopCode />,
      bg: "998ccd",
      

    },
    {
      data: "mechanical Power engineer",
      path:"/imgs/avtars",

      imgSrc: "eng",
      icon: <GiMechanicGarage />,
      bg: "3D2C8D",

    },
    {
      data: "excel specialist",
      path:"/imgs/avtars",
      imgSrc: "excel",
      icon: <SiMicrosoftexcel />,
      bg: "916BBF",
      avatar:"<Meexcel />"

    },
    {
      data: "Football data collector",
      path:"/imgs/avtars",
      imgSrc: "arqam",
      icon: <RiFootballFill />,
      bg: "1C0C5B",

    },
  ]);

  const [Cindex, setCindex] = useState(0);

  useEffect(() => {

  }, [Cindex]);

  return (
    <div className="home m-0 ">
      <div className="home-overlay">
      <Navbar />
        <div className="container">
          <div className="d-flex align-items-center ">
            <div className="col-4 my-info   text-left">
              <h2 className="hi">Hello! I'm</h2>
              <h2 className="name h1"> Khaled Mohamed</h2>
              <h2 className="job ">
                {linearS.lines} <span className="d-inline-block m-0 p-0" >{carrers[Cindex].data}</span>
              </h2>
            </div>
            <div className="text-center col-8">
              <Carousel content={carrers} getIndex={setCindex} />
            </div>
            <div className="lol">
              <Sociallinks />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
