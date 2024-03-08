import "../components/sidebar.css";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import React, { useState, useEffect } from 'react';

const sidebar = {
  profile: [{
    title: "Home",
    link: "#home",
    id: "home"
  },
  {
    title: "About",
    link: "#about",
    id: "about"
  },
  {
    title: "Projects",
    link: "#projects",
    id: "projects"
  },
  {
    title: "Contact",
    link: "#contact",
    id: "contact"
  }]
}



function SideBar () {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700; // Set your desired breakpoint

  useEffect(() => {
    const handleResizeWindow = () => {
      if (window.innerWidth < breakpoint) {
        setWidth(false); // Hide the full menu
      } else {
        setWidth(true); // Show the full menu
      }
    };

    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <button id="icon-btn">
          <MdMenu />
        </button>
      </div>

      <div className="mobile-menu">
        <div className="sidebar">
          <div className="exit-btn">
            <button id="closeBtn"><IoMdClose /></button>
          </div>
          <div className="menu-items">
            {
              sidebar.profile.map((menu, index) => {
                return <div key={index} className="menu-item" id={sidebar.id}>{sidebar.title}</div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default SideBar; 