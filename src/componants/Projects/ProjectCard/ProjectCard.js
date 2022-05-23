import React from "react";
import "./ProjectCard.css";
import {FaLaptopCode } from "react-icons/fa";
function ProjectCard(props) {


  return (
    <div className="ProjectCard bg-transparent shadow border mb-4">
      <div className="image d-flex align-items-end justify-content-center">
        {props.data.coverImg ? <img src={props.data.coverImg} width="98%" /> :""}
      </div>

      <div className="info">
      <div className="split d-flex justify-content-center " style={{background:props.data.bg}}><span style={{background:props.data.bg}} className="icon d-inline-block text-light text-lg d-flex justify-content-center align-items-center"><FaLaptopCode /></span></div>

        <div className="head px-2">
          <h3>{props.data.name}</h3>
          <p>{props.data.summury}</p>
        </div>
        <div className="addition px-2">
          <h5>{props.data.date}</h5>
          <ul>
            {(props.data.use || []).splice(props.data.use.length - 3, 3).map((el, i) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
        <div className="links">

        <a href={props.data.link} rel="noopener noreferrer"  target="_blank">
        <li className="social-item mt-2 " >
          <button
            type="button"
            class="btn btn-transparent"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title={"more"}
          >
            More 
          </button>
        </li>
            </a>
            <a href={props.data.link} rel="noopener noreferrer"  target="_blank">
        <li className="mt-2 " >
          <button
            type="button"
            class="btn btn-transparent "
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title={"demo"}
          >
            Demo 
          </button>
        </li>
            </a>    
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
