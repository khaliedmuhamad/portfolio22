import React , {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/home/home";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

function App() {
const [web] = useState({projects:[
  {name:"photo graphic",date:"2020-2-5",summury:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",techo:"HTMLCSS",coverImg:"",link:"",bg:"primary"},
  {name:"book shop",date:"",summury:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",techo:"PureJs",coverImg:"",link:"",bg:"danger"},
  {name:"corona",date:"",summury:"ccccccccccccccccccccccccccccccccccc",techo:"ReactJs",coverImg:"",link:"",bg:"info"},
  {name:"old portfolio",date:"ddddddddddddddddddddddddddddddd",summury:"",techo:"ReactJs",coverImg:"",link:"",bg:"warning"},
  {name:"ecommerce",date:"deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",summury:"",techo:"ReactJs",coverImg:"",link:"",bg:"success"},
  {name:"new porfolio",date:"ffffffffffffffffffffffffffffffffff",summury:"",techo:"ReactNodeJs",coverImg:"",link:"",bg:"dark"},
],
techarr:["all","HTMLCSS","PureJs","ReactJs","ReactNodeJs"]
})
const [excel] = useState({projects:[
  {name:"loll",date:"2020-2-5",summury:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",techo:"GooglesheetForms",coverImg:"",link:"",bg:"primary"},
  {name:"dalel",date:"",summury:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",techo:"GooglesheetForms",coverImg:"",link:"",bg:"danger"},
  {name:"jauice",date:"",summury:"ccccccccccccccccccccccccccccccccccc",techo:"GoogleSheet",coverImg:"",link:"",bg:"info"},
  {name:"styudy",date:"ddddddddddddddddddddddddddddddd",summury:"",techo:"GoogleSheet",coverImg:"",link:"",bg:"warning"},
],
techarr:["all","GooglesheetForms","GoogleSheet"]
})
const [eng] = useState({projects:[
  {name:"mechanism",date:"2020-2-5",summury:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",techo:"3DMax",coverImg:"",link:"",bg:"primary"},
  {name:"car",date:"",summury:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",techo:"AutoDesk",coverImg:"",link:"",bg:"danger"},
  {name:"build",date:"",summury:"ccccccccccccccccccccccccccccccccccc",techo:"AutoCad",coverImg:"",link:"",bg:"info"},
  {name:"prooo",date:"ddddddddddddddddddddddddddddddd",summury:"",techo:"Drawing",coverImg:"",link:"",bg:"warning"},
],
techarr:["all","Drawing","AutoCad","AutoDesk","3DMax"]
})
  return (
    <div className="App ">
    <BrowserRouter >
      <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} exact />

          <Route path="/work" element={<Work />}  exact />

          <Route path="/contact" element={<Contact />} exact />
          
<Route path="/work/web-development" element={<Projects  data={web} />} exact />
<Route path="/work/excel" element={<Projects  data={excel} />} exact />
<Route path="/work/M-eng" element={<Projects data={eng} />} exact />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
