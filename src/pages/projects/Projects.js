import React, { useEffect, useState } from "react";
import Options from "../../componants/Options/Options";
import Footer from "../../componants/footer/Footer";
import Navbar from "../../componants/navbar/navbar";
import "./Projects.css";
import ProjectCard from "../../componants/Projects/ProjectCard/ProjectCard";
import ProjectRow from "../../componants/Projects/ProgetRow/ProjectRow";
const Projects = (props) => {
  const [dark, setDark] = useState(false);
  const [optionshow, setOption] = useState({
    filter: "all",
    sort: "name",
    show: "line",
  });

  useEffect(() => {}, [dark]);

  const filterHandel = (e) => {
    if (optionshow.filter === "all") {
      return e.name !== null;
    } else {
      return e.techo === optionshow.filter;
    }
  };
  const sortHandel = (a, b) => {
    if (optionshow.sort === "name") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    } else if (optionshow.sort === "date") {
      return new Date(b.date) - new Date(a.date);
    }
  };

  return (
    <div className="m-0 ">
      <div
        className={`page-overlay projects-overlay ${!dark ? "light" : "dark"} `}
      >
        <Navbar getDark={setDark} />
        <div className="container content">
          <h1 className="text-capitalize text-danger">{props.data.head}</h1>
          {<Options data={props.data} getOptions={setOption} />}
          <div className="row mb-5">
            {optionshow.show === "line"
              ? (props.data.projects || [])
                  .filter((e) => filterHandel(e))
                  .sort((a, b) => sortHandel(a, b))
                  .map((e, i) => (
                    <div className={`col-12`} key={"project-"+i}>
                      <div className={`p-2`}>
                        <ProjectRow data={e} />
                      </div>
                    </div>
                  ))
              : (props.data.projects || [])
                  .filter((e) => filterHandel(e))
                  .sort((a, b) => sortHandel(a, b))
                  .map((e, i) => (
                    <div className={`col-lg-4 col-md-6 col-sm-12 col-10 mx-auto `} key={"project-"+i}>
                      <div className={`p-2`}>
                        <ProjectCard data={e} />
                      </div>
                    </div>
                  ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Projects;
