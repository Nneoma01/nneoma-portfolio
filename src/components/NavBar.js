import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import "../components/NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';

const menu = {
  brand: {
    name: "Nneoma",
    class: "navbar-name"
  },
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


const NavBar = () => {
  const mobileMenu = document.querySelector(".mobile-menu")
  const menuBar = document.querySelector(".menubar")

  function showMobileMenu() {
    mobileMenu.classList.add("active");
    mobileMenu.classList.remove("non-active")
  }

  const hideMobileMenu = () => {
    mobileMenu.classList.add("non-active")
    mobileMenu.classList.remove("active")
  }

  // const appHeader = document.querySelector(".App-header");

  // const changeNavbar = () => {
  //   appHeader.classList.remove("app-header-transparent");
  //   appHeader.classList.add("app-header-colored");
  // } else {
  //   appHeader.classList.add ("app-header-transparent");
  //   appHeader.classList.remove("app-header-colored");
  // }

  // window.addEventListener("scroll", e => {
  //   changeNavbar();
  // });


  return (
    <div>
      <div className='App-header app-header-transparent d-none d-lg-flex' id="mynav">
        <div className="navbar-name {menu.brand.class}">{menu.brand.name}</div>
        <div className="navbar-links" id="nav-link">
          {
            menu.profile.map((menu, index) => {
              return <div key={index} className="nav-link" id={menu.id}>{menu.title}</div>
            })
          }
        </div>
        <div className="navbar-icons">
          <a className="app-link" href="#"><FaInstagram /></a>
          <a className="app-link" href="#"><FaLinkedin /></a>
          <a className="app-link" href="#"><FaGithub /></a>
          <a className="app-link" href="#"><MdOutlineMail /></a>
          <a className="app-link" href="#"><RiContactsLine /></a>
        </div>

        <div class="container d-block d-lg-none">
          <button id="icon-btn" onclick="showMobileMenu()">
            <MdMenu />
          </button>
        </div>

        <div class="mobile-menu">
          <div class="menubar">
            <div class="text-end">
              <button id="closeBtn" onclick="hideMobileMenu()"><IoMdClose /></button>
            </div>
            <div class="menu-items">
              <a class="menu-item" href="#">Home</a>
              <a class="menu-item" href="#">About</a>
              <a class="menu-item" href="#">Portfolio</a>
              <a class="menu-item" href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default NavBar;
