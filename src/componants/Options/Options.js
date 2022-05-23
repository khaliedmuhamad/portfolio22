import React,{useState,useEffect} from 'react';
import "./FilterOptions.css";
import {IoIosKeypad ,IoIosMenu } from  "react-icons/io"
import SortingDropDown from './SortingDropDown';
import FilteringDropDown from "./FilteringDropDown";

function Options(props) {
const [data, setData] = useState("");
const [proArr, seProArr] = useState([]);
const [settings,setSett] = useState({})
const [filter,setfilter] = useState("all")
const [sort,setSort] = useState("")

useEffect(() => {
  setData(props.data);
  seProArr(data.projects);
}, [data]);
useEffect(() => {
  setSett({
    filter:filter,
    sort:sort
  })
}, [filter,sort]);

useEffect(() => {
  props.getOptions(settings)
}, [settings]);

  return (
    <div className='w-100 shadow mb-5 mt-5 py-2 px-2 rounded d-flex justify-content-between align-items-center' style={{background:"#ffffff26"}}>
        <div className='totalP'>{proArr == undefined ? "many" : proArr.length}<span> projects</span></div>
        <div className='sorting d-inline'>Sort {<SortingDropDown getSort={setSort} />}</div>
        <div className='filter'>
        filter By  {<FilteringDropDown data={data.techarr} getFilter={setfilter}  />}
        </div>
        <div className='showType'>
            {<IoIosKeypad />}
            {<IoIosMenu />}
        </div>
    </div>
  )
}

export default Options;