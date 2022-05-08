import React from "react";

export default function Map() {
  return (
    <div className="mapouter w-100 h-100">
      <div className="gmap_canvas">
        <iframe
          width={"100%"}
          height={"100%"}
          id="gmap_canvas"
          src={
            "https://maps.google.com/maps?q=cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          }
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://123movies-to.org"></a>
      </div>
    </div>
  );
}
