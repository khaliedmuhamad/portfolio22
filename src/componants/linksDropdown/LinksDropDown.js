import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LinksDropDown() {

    const [show, setSow] = useState(false);

  return (
    <div className="btn-group ph-3" onMouseEnter={()=>{setSow(!show)} } onMouseLeave={()=>{setSow(!show)} }>
    <button className={` btn btn-transparent p-0 text-primary`} type="button">
    work
    </button>
    <button className={` btn btn-transparent p-0 text-primary dropdown-toggle dropdown-toggle-split  ${!show ? "" :"show"}`} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded={show}>

    </button>
    <ul class={`dropdown-menu ${!show ? "" :"show"} pt-1 mt-0 rounded `} aria-labelledby="dropdownMenuButton" data-bs-popper={`${!show ? "" :"none"}`} style={{opacity:"0.8" }} >
      <li><Link to="/work/web-development" className="dropdown-item" >web-development </Link></li>
      <li><Link to="/work/excel" className="dropdown-item" >excel </Link></li>
      <li><Link to="/work/M-eng" className="dropdown-item" >M-eng </Link></li>
    </ul>
  </div>
  )
}
