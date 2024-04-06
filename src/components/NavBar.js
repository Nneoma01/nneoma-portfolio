import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import "../components/NavBar.css";
import React, { useState, useEffect } from 'react';


const menu = {
  brand: {
    name: "Nneoma",
    class: "navbar-name"
  },
  profile: [{
    title: "Home",
    id: "#home"
  },
  {
    title: "About",
    id: "#About"
  },
  {
    title: "Projects",
    id: "#projects"
  },
  {
    title: "Contact",
    id: "#contact"
  }]
}

const icon = {
  profile: [{
    title: <FaInstagram />,
    link: "https://www.instagram.com/__nneomah?igsh=MWR1dDB5dm1kcjl6aQ==",
    id: "insta"
  },
  {
    title: <FaLinkedin />,
    link: "https://www.linkedin.com/in/nneoma-okagbue-37468421a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    id: "linkedin"
  },
  {
    title: <FaGithub />,
    link: "https://github.com/Nneoma01/nneoma-portfolio.git",
    id: "git"
  },
  {
    title: <MdOutlineMail />,
    link: "mailto:favourokagbue20@gmail.com",
    id: "email"
  },
  {
    title: <RiContactsLine />,
    link: "tel: +234 814 177 5550",
    id: "contact"       
  }]
}

const NavBar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const appHeader = document.getElementById("mynav");  
      if (window.scrollY > 200) {
        appHeader.classList.add("app-header-active");
    } else {
        appHeader.classList.remove("app-header-active");
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='App-header app-header-transparent' id="mynav">
        <div className="navbar-name {menu.brand.class}">{menu.brand.name}</div>
        <div className="navbar-links" id="nav-link">
          {
            menu.profile.map((menu, index) => {
              return <div key={index} className="nav-link"><a href={menu.id}>{menu.title}</a></div>
            })
          }
        </div>
        <div className="navbar-icons">
          {
            icon.profile.map((icon, index) => {
              return <div key={index} className="app-link" id={icon.id}><a href={icon.link}>{icon.title}</a></div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default NavBar;
