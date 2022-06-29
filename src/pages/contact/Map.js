import React from "react";
import Anochor from "../../componants/Anochor/Anochor";

export default function Map() {
  return (
    <div className="mapouter w-100 h-100">
      <div className="gmap_canvas">
        <iframe
          title="google-maps"
          width={"100%"}
          height={"100%"}
          id="gmap_canvas"
          src={
            "https://maps.google.com/maps?q=cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          }
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <Anochor href="https://123movies-to.org"></Anochor>
      </div>
    </div>
  );
}
