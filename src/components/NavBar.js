import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import "../components/NavBar.css";

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
  const appHeader = document.querySelector(".App-header");
  const appBody = document.querySelector(".App-body");

//   const changeNavbar = () => {
//     appHeader.classList.remove("app-header-transparent");
//     appHeader.classList.add("app-header-colored");
//   }else{
//     appHeader.classList.add("app-header-transparent");
//     appHeader.classList.remove("app-header-colored");
//   }

// appBody.addEventListener("scroll", e => {
//   changeNavbar();
// });

return (
  <div className='App-header app-header-transparent'>
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
  </div>
);
}

export default NavBar;
