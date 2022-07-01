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
import Footer from "../../componants/footer/Footer";
function Home() {

  const [carrers] = useState([
    {
      data: "full stack developer",
      path: "/imgs/avtars",
      imgSrc: "full",
      icon: <FaLaptopCode />,
      bg: "998ccd",
    },
    {
      data: "mechanical Power engineer",
      path: "/imgs/avtars",

      imgSrc: "eng",
      icon: <GiMechanicGarage />,
      bg: "3D2C8D",
    },
    {
      data: "excel specialist",
      path: "/imgs/avtars",
      imgSrc: "excel",
      icon: <SiMicrosoftexcel />,
      bg: "916BBF",
      avatar: "<Meexcel />",
    },
    {
      data: "Football data collector",
      path: "/imgs/avtars",
      imgSrc: "arqam",
      icon: <RiFootballFill />,
      bg: "1C0C5B",
    },
  ]);

  const [Cindex, setCindex] = useState(0);

  useEffect(() => {}, [Cindex]);

  const [dark, setDark] = useState();

  



  
  return (
    <div className="m-0 page">
      <div className={` page-overlay ${!dark ? "light" : "dark"} `}>
        <Navbar getDark={setDark} />
        <div className="container content pt-5">
          <div className="d-flex flex-lg-row  flex-column    justify-content-center align-items-center ">
            <div className="col-lg-4 col-12  my-info  text-lg-start text-center py-4">
              <h2 className="hi text-capitalize">Hello! I'm</h2>
              <h2 className="name h1 text-capitalize"> Khaled Mohamed</h2>
              <h2 className="job ">
                {linearS.lines}{" "}
                <span className="d-inline-block m-0 p-0 text-capitalize h3">
                  {carrers[Cindex].data}
                </span>
              </h2>
            </div>
            <div className="text-center col-lg-8 col-12 py-md-5 ">
              <Carousel content={carrers} getIndex={setCindex} />
            </div>
          </div>
          <div className="social-media">
            <Sociallinks />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
