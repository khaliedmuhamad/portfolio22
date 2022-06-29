import React, { useEffect, useState } from "react";

const FilteringDropDown = (props) => {
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState(["lol", "no"]);

  useEffect(() => {
    setData(props.data);
  }, [props, data]);

  useEffect(() => {
    props.getFilter(filter);
  }, [props, filter]);

  return (
    <div className="btn-group  h-100 ">
      <button
        type="button"
        className="btn btn-lang  dropdown-toggle text-capitalize"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {filter}
      </button>
      <ul className="dropdown-menu  dropdown-menu-lang shadow ">
        {data !== undefined
          ? data.map((el, i) => (
              <li key={i}>
                <button
                  className="dropdown-item  text-capitalize"
                  type="button"
                  onClick={() => setFilter(el)}
                >
                  {el}
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};
export default FilteringDropDown;
