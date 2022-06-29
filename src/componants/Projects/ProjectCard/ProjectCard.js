import React from "react";
import "./ProjectCard.css";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import { AiOutlineAlert } from "react-icons/ai";
import Anochor from "../../Anochor/Anochor";
function ProjectCard(props) {
  return (
    <div className="ProjectCard bg-transparent shadow border mb-4">
      <div className="image d-flex align-items-end justify-content-center">
        {props.data.coverImg ? (
          <img
            src={props.data.coverImg + ".png"}
            alt={props.data.name}
            height={"80%"}
          />
        ) : (
          ""
        )}
      </div>

      <div className="info">
        <div
          className="split d-flex justify-content-center "
          style={{ background: props.data.bg }}
        >
          <span
            style={{ background: props.data.bg }}
            className="icon d-inline-block text-light text-lg d-flex justify-content-center align-items-center"
          >
            <FaLaptopCode />
          </span>
        </div>

        <div className="head px-2">
          <h3 className="text-capitalize ">{props.data.name}</h3>
          <p>{props.data.summury}</p>
        </div>
        <div className="addition px-2">
          <h5>{props.data.date}</h5>
        </div>
        <div className="links d-flex">
          <Anochor
            href={props.data.link.github ? props.data.link.github : ""}
            onClick={(E) => {
              if (!props.data.link.github) {
                E.preventDefault();
              } else {
                return "";
              }
            }}
            className="col-5 "
            rel="noopener noreferrer"
            target="_blank"
          >
            <li
              className="btn-item mt-2 list-unstyled"
              style={{ background: props.data.bg }}
            >
              <button
                type="button"
                className="btn btn-transparent text-light "
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title={"more"}
              >
                Gitbub
                <FaGithub className="text-lg ms-3 h5" />
              </button>
            </li>
          </Anochor>

          <Anochor
            href={props.data.link.demo}
            className="col-5 offset-2"
            rel="noopener noreferrer"
            onClick={(E) => {
              if (!props.data.link.demo) {
                E.preventDefault();
              } else {
                return "";
              }
            }}
            target="_blank"
          >
            <li
              className="mt-2 list-unstyled "
              style={{ background: props.data.bg }}
            >
              <button
                type="button"
                className="btn btn-transparent text-light"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title={"demo"}
              >
                Demo
                <AiOutlineAlert className="text-lg ms-3 h5" />
              </button>
            </li>
          </Anochor>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
