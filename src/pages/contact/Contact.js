import React,{Suspense, useEffect, useState} from "react";
import Footer from "../../componants/footer/Footer";
import Navbar from "../../componants/navbar/navbar";
import "./Contact.css";


export default function Contact() {
  const [dark,setDark] =useState(false)

  useEffect(() => {
  }, [dark]);


  const Map = React.lazy(()=> import("./Map") );

  return (
    <div className="page  contact m-0 ">
      <div className={` page-overlay ${!dark ? "light":"dark"} `}>
      <Navbar getDark={setDark} />
        <div className="container content pt-5">
        <h1 className="head mb-4">Contact </h1>
          <div className="row">
            <div className="col-4 meform">
              <div className="pe-2">
                <form className="row g-3 algin-items-between">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <label for="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress2" className="form-label">
                      Message
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="tell me about you..."
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-dark d-block w-100"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-8 map">
              <div className="ps-2 h-100">
            <Suspense fallback={() => {<img src="/imgs/wait.gif" />}}>
            {<Map />}

            </Suspense>
</div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
    </div>
  );
}
