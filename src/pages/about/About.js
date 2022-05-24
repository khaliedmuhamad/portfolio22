import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../../componants/navbar/navbar";
import {AiOutlineHtml5} from 'react-icons/ai';
import {DiBootstrap, DiCss3Full, DiJqueryLogo, DiJsBadge, DiNodejs, DiReact, DiSass} from 'react-icons/di';
import {SiExpress, SiPug, SiTypescript} from "react-icons/si"
import {BsFillTerminalFill} from "react-icons/bs";
import {FaGit} from "react-icons/fa";
import file from "./Resume-Khaled-Mohamed (1).pdf"
import Footer from "../../componants/footer/Footer";
export default function About() {
  const [skillslang] = useState([
    { tech: "html5", logo: <AiOutlineHtml5 /> },
    { tech: "css3", logo: <DiCss3Full /> },
    { tech: "javascript", logo: <DiJsBadge /> },
    { tech: "typescript", logo: <SiTypescript /> },
    { tech: "jquery", logo: <DiJqueryLogo /> },
    { tech: "Bootstrap", logo: <DiBootstrap /> },
    { tech: "sass", logo: <DiSass /> },
    { tech: "pug", logo: <SiPug /> },
    { tech: "reactJs", logo: <DiReact /> },
    { tech: "nodejs", logo: <DiNodejs /> }
  ]);
  const [skillstool] = useState([
    { tech: "git", logo: <FaGit /> },
    { tech: "cmd", logo: <BsFillTerminalFill /> },
  ]);
  const imgPupple = document.querySelector("div.img-pupple");
  const dynamicStylesAbout = () => {
    if (imgPupple == null) {
      return "wait...";
    } else {
      imgPupple.style.width = window.innerWidth / 5 + "px";
      imgPupple.style.height = window.innerWidth / 5 + "px";
      console.log("gooood...");
    }
  };
  const [dark,setDark] =useState(false)


  window.addEventListener("resize", () => {
    dynamicStylesAbout(imgPupple);
  });

  useEffect(() => {}, [imgPupple]);

  console.log(typeof imgPupple);
  return (
    <div className="about page m-0 ">
      <div className={`about page-overlay ${!dark ? "light":"dark"} `}>
      <Navbar getDark={setDark} />
        <div className="container content">
          <div className="row align-items-center h-100 d-flex">
            <div className="col-4  ">
              <div className="d-flex flex-column">
                <div className="col-12 img-pupple-show"><div className="img-pupple h-100"></div></div>
                <div className="col-12 h-100">
              <span className="h3">Dev skills 🚀</span><br/>
              <ul className="list-unstyled d-flex flex-wrap skills-list">
              {skillslang.map((e,index)=>
                <li className="col-4 mt-2 skills-item" key={index}>
                <div className="p-1">{e.tech} <span className="">{e.logo}</span></div>  
                </li>)}
                </ul>

              </div></div>
              

            </div>
            <div className="col-7 offset-1 info-pupple ">
              <h1 className="head ">About Me <span className="working bg-danger p-2 rounded ">I am looking for work <span className="flag">🏳</span></span></h1>
              <p className="paragraph">
                I love to dig into problems and solve them with modern
                technology. I enjoy learning about many executives throughout my
                career in engineering and development. My personal and
                professional experiences have taught me the following about
                myself: I educate, refine and drive myself to be a better
                person.
                <br />
                <br />

                I am constantly learning because I never settle I stay calm when
                faced with adversity I focus on making high-quality decisions I
                enjoy meeting new people and making friends.
                <br />
                <br />
                I think in a way I'm kind of like those web pages. My
                specialties include quickly learning new skills and programming
                languages, responsive design principles, website optimization.
                So far I have JavaScript, HTML, CSS, React jQuery, Bootstrap,
                and Git/GitHub under my belt. I've started learning Node.JS and
                Express.JS. I'm still enthusiastically grabbing onto any other
                programming languages, frameworks, or principles I can integrate
                into the coding web in my head.
              </p>
              <a
                href={file}
                download={file}
              >
                <button className="btn btn-lg btn-success">
                  Download resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
