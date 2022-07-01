import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../componants/footer/Footer';
import Navbar from '../../componants/navbar/navbar';
import errills from "./404err.svg"
import "./NoMatch.css"
function NoMatch() {


    const [dark, setDark] = useState();

  return (
<div className="m-0 page">
      <div className={` page-overlay ${!dark ? "light" : "dark"} `}>
        <Navbar getDark={setDark} />
        <div className="container content py-3">
            <div className='d-flex justify-content-center align-items-center flex-column nomatch' >
                <div className='w-100 ills-overlay text-center'>
                    {<img src={errills}  width={'35%'}/>}
                </div>
                <h1>Ooups, Page not found</h1>
                <p>We are very sory for the inconvenience. It looks like you're trying to
access a page that has been deleted or never even existed</p>                    <Link to="/">
                <button className='btn btn-lg btn-dark'>
                        Back to <span>Home</span> page  
                </button>   </Link>

            </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default NoMatch