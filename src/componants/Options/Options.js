import React, { useState, useEffect } from "react";
import "./FilterOptions.css";
import { IoIosKeypad, IoIosMenu } from "react-icons/io";
import SortingDropDown from "./SortingDropDown";
import FilteringDropDown from "./FilteringDropDown";

function Options(props) {
  const [data, setData] = useState("");
  const [proArr, seProArr] = useState([]);
  const [settings, setSett] = useState({});
  const [filter, setfilter] = useState("all");
  const [sort, setSort] = useState("");
  const [show, setShow] = useState("line");

  useEffect(() => {
    setData(props.data);
    seProArr(data.projects);
  }, [data, props]);

  useEffect(() => {
    setSett({
      filter: filter,
      sort: sort,
      show: show,
    });
  }, [filter, sort, show]);

  useEffect(() => {
    props.getOptions(settings);
  }, [settings, props]);

  return (
    <div
      className="w-100 shadow my-5 p-md-2 p-sm-2 rounded d-flex justify-content-between align-items-center"
      style={{ background: "#ffffff26" }}
    >
      <div className="totalP">
        {proArr === undefined ? "many" : proArr.length}
        <span> projects</span>
      </div>
      <div className="sorting d-inline">
        Sort {<SortingDropDown getSort={setSort} />}
      </div>
      <div className="filter">
        filter By{" "}
        {<FilteringDropDown data={data.techarr} getFilter={setfilter} />}
      </div>
      <div className="showType">
        <button
          className={`btn btn-transparent ${
            show === "line" ? "text-primary" : ""
          }   `}
          onClick={() => {
            setShow("line");
          }}
        >
          {<IoIosMenu className="p-0 m-0 h5" />}
        </button>
        <button
          className={`btn btn-transparent ${
            show === "grid" ? "text-primary" : ""
          }   `}
          onClick={() => {
            setShow("grid");
          }}
        >
          {<IoIosKeypad className="p-0 m-0 h5" />}
        </button>
      </div>
    </div>
  );
}

export default Options;
