import React, { useState, useEffect } from "react";
import "./Work.css"
import Navbar from "../../componants/navbar/navbar";
import { Route, Routes,Link, Router } from 'react-router-dom'
import Projects from "../projects/Projects";


export default function Work() {

const [data] = useState([
  {content:"web development ",href:"web-development",bg:"916BBF",imgSrc:"web.jpg"},
  {content:"excel sheets ",href:"excel",bg:"3D2C8D",imgSrc:"excel.png"},
  {content:"Mechaniacal Engineering ",href:"M-eng",bg:"1C0C5B",imgSrc:"eng.png"},
])
  return (
    <div className="home work m-0 ">
      <div className="home-overlay work-overlay">
        <Navbar />
        <div className="container">
          <h1 className="head text-danger mt-5 pt-p">Works field</h1>
        {data.map((e,i)=>         <div className="work-pupples" style={{backgroundImage:`URL(imgs/works/${e.imgSrc}) ,linear-gradient(#d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)`}} >
          <Link to={`/work/${e.href}`} className="d-block" >
          <div className="work-more w-100 h-100 text-center text-capitalize">
            <span>{e.content}</span>

              <button className="btn btn-primary btn-sm p-2" >
                Projects 🌋
              </button> 
          </div>
          </Link>
            </div> 
            )}
            
          </div>
      </div>
    </div>
  );
}
