import "../components/sidebar.css";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import React, { useState, useEffect } from 'react';

const sidebar = {
  profile: [{
    title: "Home",
    link: "home",
    id: "#home"
  },
  {
    title: "About",
    link: "about",
    id: "#About"
  },
  {
    title: "Projects",
    link: "projects",
    id: "#projects"
  },
  {
    title: "Contact",
    link: "contact",
    id: "#Contact"
  }]
}

function Sidebar() {
  let sideMenu;

  useEffect(() => {
    sideMenu = document.getElementById("side");
  }, []); 

  const showSideMenu = () => {
    console.log("show sidebar")
    sideMenu.classList.add("side-menu-active");
    sideMenu.classList.remove("side-menu-non-active")
  }

  const hideSideMenu = () => {
    sideMenu.classList.add("side-menu-non-active")
    sideMenu.classList.remove("side-menu-active")
  }

  return (
    <div >
      <div className="container">
        <button type="button" id="icon-btn" onClick={showSideMenu}>
          <MdMenu />
        </button>
      </div>

      <div className="side-menu" id="side">
        <div className="side-bar">
          <div className="exit-btn">
            <button id="close-btn" onClick={hideSideMenu} ><IoMdClose /></button>
          </div>
          <div className="menu-items">
            {
              sidebar.profile.map((sidebar, index) => {
                return <div key={index} className="menu-item"><a href={sidebar.id}>{sidebar.title}</a></div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default Sidebar; 