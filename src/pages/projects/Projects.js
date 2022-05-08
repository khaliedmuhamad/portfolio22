import React,{useState} from 'react'
import Navbar from '../../componants/navbar/navbar'

const Projects = (props) => {

const [techFilter, setTechFilter] = useState("all");
console.log(window.location.href)
const filterHandel = (e) =>{
  if (techFilter == "all"){return e.name !== null }else{return e.techo ===  techFilter}  
}
    return(
    <div className="home work m-0 ">
      <div className="home-overlay work-overlay">
        <Navbar />
        <div className="container">
          <h1>{window.location.href }</h1>
          {props.data.techarr.map(e=> <button className={`btn btn-warning bt-lg me-3 my-5`} onClick={()=>{setTechFilter(e)}}>{e}</button>)}
            <div className='row'>
            {props.data.projects.filter((e)=>filterHandel(e) ).map((e,i)=> <div className={`card  col-4`} >
              <div className={`p-2 bg-${e.bg}`}>
              {/*"<img src="..." className="card-img-top" alt="..." />"*/}
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">{e.summury}.</p>
                <a href="#" className="btn btn-primary">{e.link}</a>
                </div>
              </div>
            </div>
            )}
        </div>
        </div>
      </div>
    </div>
  )
}
export default Projects