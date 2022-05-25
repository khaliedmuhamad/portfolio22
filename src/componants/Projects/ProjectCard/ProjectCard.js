import React from "react";
import "./ProjectCard.css";
import {FaLaptopCode } from "react-icons/fa";
import {AiOutlineCoffee ,AiOutlineAlert  } from "react-icons/ai";
import { Link } from "react-router-dom";
function ProjectCard(props) {


  return (
    <div className="ProjectCard bg-transparent shadow border mb-4">
      <div className="image d-flex align-items-end justify-content-center">
        {props.data.coverImg ? <img src={props.data.coverImg}  width="98%" /> :""}
      </div>

      <div className="info">
      <div className="split d-flex justify-content-center " style={{background:props.data.bg}}><span style={{background:props.data.bg}} className="icon d-inline-block text-light text-lg d-flex justify-content-center align-items-center"><FaLaptopCode /></span></div>

        <div className="head px-2">
          <h3 className="text-capitalize ">{props.data.name}</h3>
          <p>{props.data.summury}</p>
        </div>
        <div className="addition px-2">
          <h5>{props.data.date}</h5>
        </div>
        <div className="links d-flex">
      
        <a href={""} className="col-5 " rel="noopener noreferrer"  target="_blank">
       
        <li className="btn-item mt-2 list-unstyled " style={{background:props.data.bg}}>  <Link to={`/work/web-development/`+ props.data.id} exact>
          <button
            type="button"
            className="btn btn-transparent text-light"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title={"more"} 
          >
            More 
            <AiOutlineCoffee className="text-lg ms-3 h5" />
          </button>            </Link>
        </li>


            </a>

            <a href={props.data.link} className="col-5 offset-2"  rel="noopener noreferrer"  target="_blank">
        <li className="mt-2 list-unstyled " style={{background:props.data.bg}} >
          <button
            type="button"
            className="btn btn-transparent text-light"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title={"demo"}
          >
            Demo 
            <AiOutlineAlert className="text-lg ms-3 h5"/>
          </button>
        </li>
            </a>    
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
