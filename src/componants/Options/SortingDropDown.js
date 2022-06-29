import React, { useState, useEffect } from "react";

const SortingDropDown = (props) => {
  const [conditions, setConditions] = useState("name");

  useEffect(() => {
    props.getSort(conditions);
  }, [props, conditions]);

  return (
    <div className="btn-group  h-100">
      <button
        type="button"
        className="btn btn-lang dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {conditions}
      </button>
      <ul className="dropdown-menu  dropdown-menu-lang shadow ">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setConditions("name")}
          >
            name
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setConditions("date")}
          >
            Date
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortingDropDown;
