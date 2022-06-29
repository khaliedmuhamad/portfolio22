import React, { useState, useEffect } from "react";
import "./carousel.css";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bigPuuple = document.querySelector(".carousel-big-pupple");
  const pupple1 = document.querySelector(".carousel-small-pupple#pupple1");
  const pupple2 = document.querySelector(".carousel-small-pupple#pupple2");
  const pupple3 = document.querySelector(".carousel-small-pupple#pupple3");
  const pupple4 = document.querySelector(".carousel-small-pupple#pupple4");
  const jobtext = document.querySelector("h2.job span");

  const nextPupplePos = (e) => {
    if (pupple1 == null) {
      return "wait...";
    } else {
      if (e === 0) {
        pupple1.style.top = styles[0].top;
        pupple1.style.right = styles[0].right;
        pupple2.style.top = styles[1].top;
        pupple2.style.right = styles[1].right;
        pupple3.style.top = styles[2].top;
        pupple3.style.right = styles[2].right;
        pupple4.style.top = styles[3].top;
        pupple4.style.right = styles[3].right;
      } else if (e === 1) {
        pupple1.style.top = styles[1].top;
        pupple1.style.right = styles[1].right;
        pupple2.style.top = styles[0].top;
        pupple2.style.right = styles[0].right;
        pupple3.style.top = styles[2].top;
        pupple3.style.right = styles[2].right;
        pupple4.style.top = styles[3].top;
        pupple4.style.right = styles[3].right;
      } else if (e === 3) {
        pupple1.style.top = styles[3].top;
        pupple1.style.right = styles[3].right;
        pupple2.style.top = styles[1].top;
        pupple2.style.right = styles[1].right;
        pupple3.style.top = styles[2].top;
        pupple3.style.right = styles[2].right;
        pupple4.style.top = styles[0].top;
        pupple4.style.right = styles[0].right;
      } else if (e === 2) {
        pupple1.style.top = styles[2].top;
        pupple1.style.right = styles[2].right;
        pupple2.style.top = styles[1].top;
        pupple2.style.right = styles[1].right;
        pupple3.style.top = styles[0].top;
        pupple3.style.right = styles[0].right;
        pupple4.style.top = styles[3].top;
        pupple4.style.right = styles[3].right;
      }
    }
  };

  const [styles] = useState([
    /* first */ { top: "10%", right: "0%" },
    /* second */ { top: "30%", right: "45%" },
    /* third */ { top: "50%", right: "45%" },
    /* fourth */ { top: "70%", right: "0%" },
  ]);
  
setInterval(() => {
  if (currentIndex < 3){setCurrentIndex(currentIndex + 1);
    
  }else{
    setCurrentIndex(currentIndex - 3);
    
  }

}, 2000);



  //Get small pupples by query selector #+id el

  //fuction set Index when clicked a pupple 🔮.
  const thisPupple = (e) => {
    setCurrentIndex(e);
    props.getIndex(currentIndex);
  };
  //fuction set Index when clicked up arrow ⬆⬆⬆👍.
  const nextPupple = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex - 3);
    }
    props.getIndex(currentIndex);
  };
  //fuction set Index when clicked down arrow ⬇⬇⬇👎.
  const backPupple = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(currentIndex - 1);
      props.getIndex(currentIndex);
    }
  };
  //handel bg colors

  const bigPuupleStyles = [{ opacity: 0.9, color: "#6612f2" }, { opacity: 1 }];
  const bigPuupleTiming = {
    duration: 1000,
  };
  const bgAnimate = () => {
    if (bigPuuple == null) {
      return "";
    } else {
      bigPuuple.animate(bigPuupleStyles, bigPuupleTiming);
    }
  };

  //big animation run text
  const textanimationStyle = [
    { transform: " translate(0px,20px)", opacity: 0.5, color: "#6610f2" },
    { transform: "translate(0px,3px)", opacity: 1 },
  ];
  const textanimationTiming = {
    duration: 500,
  };
  const jopAnimate = () => {
    if (jobtext == null) {
      return "";
    } else {
      jobtext.animate(textanimationStyle, textanimationTiming);
    }
  };
  const imgwaiting = (path, name) => {
    return <img src={`${path + "/" + name}.webp`} alt={name} width={"100%"} />;
  };
  useEffect(() => {
    props.getIndex(currentIndex);
    nextPupplePos(currentIndex);
    jopAnimate();
    bgAnimate();
  }, [
    currentIndex,
    props,
    bigPuuple,
    bigPuupleStyles,
    bigPuupleTiming,
    jobtext,
    pupple1,
    pupple2,
    pupple3,
    pupple4,
  ]);

  return (
    <div className="custom-carousel">
      <div className="d-flex flex-lg-row flex-md-row flex-column ">
        <div className="carousel-controlers  col-md-3 col-12 py-sm-5">
          {props.content.map((el, index) => (
            <div
              className={`carousel-small-pupple btn my-sm-0 m-0`}
              id={`pupple${index + 1}`}
              style={{
                backgroundColor: `#${el.bg}`,
                outlineColor: `#${el.bg}`,
                top: `${el.top}`,
              }}
              key={index}
              onClick={() => {
                thisPupple(index);
              }}
            >
              <span className="icons  text-center">{el.icon} </span>
            </div>
          ))}
          <button
            className="btn btn-lg bg-transparent arrow my-sm-0 mt-5 d-sm-block d-none"
            onClick={() => {
              backPupple();
            }}
          >
            <GoChevronUp />
          </button>
          <button
            className="btn btn-lg bg-transparent arrow my-sm-0 my-5 d-sm-block d-none"
            onClick={() => {
              nextPupple();
            }}
          >
            <GoChevronDown />
          </button>
        </div>
        <div
          id="carousel-show"
          className="carousel-show col-md-9 col-12 my-sm-0 my-5 pt-5"
        >
          <div
            className={`carousel-big-pupple mx-auto bg-${props.content[currentIndex].bg}`}
            style={{ backgroundColor: `#${props.content[currentIndex].bg}` }}
          >
            <div className="w-100">
              {imgwaiting(
                props.content[currentIndex].path,
                props.content[currentIndex].imgSrc
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
