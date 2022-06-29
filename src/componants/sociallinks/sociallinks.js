import React, { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Anochor from "../Anochor/Anochor";
import "./sociallinks.css";
const Sociallinks = () => {
  const [social] = useState([
    {
      platform: "faceBook",
      link: "https://www.facebook.com/profile.php?id=100008333795144",
      icon: <FaFacebookF />,
    },
    {
      platform: "twitter",
      link: "https://twitter.com/khaledM25324847",
      icon: <FaTwitter />,
    },
    {
      platform: "linkdIn",
      link: "https://www.linkedin.com/in/khaled-mohamed-0758781aa/",
      icon: <FaLinkedin />,
    },
    {
      platform: "github",
      link: "https://github.com/khaliedmuhamad",
      icon: <FaGithub />,
    },
  ]);
  return (
    <ul className="list-unstyled social d-flex flex-column ">
      {social.map((item, index) => (
        <Anochor
          href={item.link}
          rel="noopener noreferrer"
          key={index}
          target="_blank"
        >
          <li className="social-item mt-2 " key={index}>
            <button
              type="button"
              className="btn btn-transparent"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title={item.platform}
            >
              {item.icon}
            </button>
          </li>
        </Anochor>
      ))}
    </ul>
  );
};
export default Sociallinks;
