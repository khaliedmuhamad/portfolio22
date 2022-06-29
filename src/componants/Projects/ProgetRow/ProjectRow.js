import React from "react";
import { AiOutlineCoffee, 
  //AiOutlineHtml5 
} from "react-icons/ai";
/*
import {
  DiBootstrap,
  DiCss3Full,
  DiJqueryLogo,
  DiJsBadge,
} from "react-icons/di";
*/
import { FaGithub } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./ProjectRow.css";
import Anochor from "../../Anochor/Anochor";

export default function ProjectRow(props) {




  return (
    <div className="d-flex flex-md-row flex-column grid-projects my5">
      <div className="mage-div col-md-5 col-12 text-center d-flex justify-content-center align-items-center">
        <img src={props.data.coverImg + ".webp"} alt="img" width={"70%"} />
      </div>
      <div className="info-div offset-md-1 col-md-6 col-12">
        <div className="head d-flex  justify-content-between ">
          <div className="title "> {props.data.name}</div>
          <div className="reacts d-flex flex-end">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check btn-sm"
                name={"reacts-" + props.data.id}
                id={"loves-" + props.data.id}
                autoComplete="off"
                onClick={(e) => {
                  e.target.cheaked = true;
                }}
              />
              <label
                className="btn btn-outline-danger btn-sm"
                htmlFor={"loves-" + props.data.id}
              >
                <span role={"img"} aria-label="love">
                 ♥  
                </span> 
                {props.data.loves}
              </label>

              <input
                type="radio"
                className="btn-check btn-sm"
                name={"reacts-" + props.data.id}
                id={"hates-" + props.data.id}
                autoComplete="off"
                onClick={(e) => {
                  e.target.cheaked = true;
                }}
              />
              <label
                className="btn btn-outline-primary btn-sm"
                htmlFor={"hates-" + props.data.id}
              >
                                <span role={"img"} aria-label="cry">
                  😢
                </span> 
                 
                {props.data.hates}
              </label>
            </div>
          </div>
        </div>
        <div className="date">{props.data.date}</div>
        <div className="summury">{props.data.summury}</div>

        <div className="uses">
          Built by
          <ul className="list-unstyled d-flex flex-wrap skills-list">
            {props.data.use.map((e, index) => (
              <li className="col-4 mt-2 skills-item" key={index}>
                <div className="p-1">
                  {e.tech} <span className="">{e.logo}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="tos d-flex">
          <div className="to-github me-3">
            <Anochor
              href={props.data.link.github}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => {
                if (!props.data.link.github) {
                  e.preventDefault();
                } else {
                  return "";
                }
              }}
            >
              <li
                className="btn-item mt-2 list-unstyled d-flex justify-content-center align-items-center"
                style={{ background: "#626364" }}
              >
                <button
                  type="button"
                  className="btn btn-transparent text-light "
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title={"more"}
                >
                  Github
                  <FaGithub className="text-lg ms-3 ms-md-1" />
                </button>
              </li>{" "}
            </Anochor>
          </div>
          <div className="to-more me-3">
            <li
              className="btn-item mt-2 list-unstyled d-flex justify-content-center align-items-center"
              style={{ background: props.data.bg }}
            >
              <button
                type="button"
                className="btn btn-transparent text-light disapled"
                id="disabledInput"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title={"more"}

              >
                {" "}
                <Link
                  to={`/work/web-development/` + props.data.id}
                  className="text-light"
                  exact="true"
                >
                  More
                </Link>
                <AiOutlineCoffee className="text-lg ms-3 ms-md-1" />
              </button>
            </li>
          </div>
          <div className="to-demo">
            <Anochor
              href={props.data.link.demo}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => {
                if (!props.data.link.demo) {
                  e.preventDefault();
                } else {
                  return "";
                }
              }}
            >
              <li className="btn-item mt-2 list-unstyled bg-danger d-flex justify-content-center align-items-center">
                <button
                  type="button"
                  className="btn btn-transparent text-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title={"more"}
                >
                  Demo
                  <BsFillLightningFill className="text-lg ms-3 ms-md-1" />
                </button>
              </li>{" "}
            </Anochor>
          </div>
        </div>
      </div>
    </div>
  );
}
