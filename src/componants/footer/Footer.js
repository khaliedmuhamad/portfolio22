import React, { useState } from "react";
import "./Footer.css"
const  Footer = () => {
    const [lang, setLang] = useState("EN")
  return (
    <div className="footer w-100 d-flex justify-content-between">
      <div className="copy-rights ms-5">© 2022 Khaled Mohamed ❤</div>
      <div className="language">
        <div className="btn-group dropup h-100">
          <button
            type="button"
            className="btn btn-lang dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {lang}
          </button>
          <ul className="dropdown-menu  dropdown-menu-lang shadow ">
            <li>
              <button className="dropdown-item" type="button" onClick={()=>{setLang("EN")} }>
                EN
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={()=>{setLang("AR")}}>
                AR
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;