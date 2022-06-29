import React, { useState } from "react";
import "./Footer.css";
const Footer = () => {
  const [lang, setLang] = useState("EN");
  return (
    <div className="footer ">
      <div className=" footer-overlay align-items-end w-100 h-100 d-flex justify-content-between">
        <div className="copy-rights ps-2">© 2022 Khaled Mohamed ❤</div>
        <div className="language ">
          <div className="btn-group dropup  ">
            <button
              type="button"
              className="btn btn-lang dropdown-toggle py-2 ps-3 me-1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {lang}
            </button>
            <ul className="dropdown-menu  dropdown-menu-lang shadow ps-3">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setLang("EN");
                  }}
                >
                  EN
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setLang("AR");
                  }}
                >
                  AR
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
