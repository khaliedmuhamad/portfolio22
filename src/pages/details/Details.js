import React , {useState} from 'react'
import { AiOutlineAlert, AiOutlineHome } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../componants/footer/Footer';
import Navbar from '../../componants/navbar/navbar';
import {web} from '../../data.js';
export default function Details(props) {
    const [dark,setDark] =useState(false);
    const {id} = useParams();
    const project = web.projects.find(prod => prod.id == id);
    console.log(project)

    return(
        <div className="page  work m-0 ">
          <div className={` page-overlay projects-overlay ${!dark ? "light":"dark"} `}>
          <Navbar getDark={setDark} />
            <div className="container content">
              <Link to={"/work/web-development"} >
              <span className='text-lg text-danger' style={{fontSize:"1.9rem"}}><AiOutlineHome /></span>
              </Link>

             <h1 className='text-center text-capitalize text-primary'>{project.name}</h1>
             <div className='mx-auto d-flex '>
             <img src={project.coverImg} width="68%" alt={project.name} className="m-auto" />
             </div>
            <h5 className=''>{project.techo}</h5>
            <a href={project.link} className="col-5 offset-2"  rel="noopener noreferrer"  target="_blank">

            <li className="mt-2 list-unstyled " style={{background:project.bg}} >
          <button
            type="button"
            className="btn btn-transparent text-light"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title={"demo"}
          >
            Demo 
            <AiOutlineAlert className="text-lg ms-3 h5"/>
          </button>
        </li>
        </a>




            {project.use.map((el,i)=>
              <li className=''>{el}</li>
            )}
            </div>
            <Footer />
          </div>
        </div>
      )
}
