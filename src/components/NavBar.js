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

const icon = {
  profile: [{
    title: <FaInstagram />,
    link: "#instagram",
    id: "insta"
  },
  {
    title: <FaLinkedin />,
    link: "#linkedin",
    id: "linkedin"
  },
  {
    title: <FaGithub />,
    link: "#github",
    id: "git"
  },
  {
    title: <MdOutlineMail />,
    link: "#email",
    id: "email"
  },
  {
    title: <RiContactsLine />,
    link: "#contact",
    id: "contact"
  }]
}

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


const NavBar = () => {
  const appHeader = document.getElementById("mynav");  

  window.onscroll = () => {
    if (window.scrollY > 300) {
        appHeader.classList.add("app-header-active");
    } else {
        appHeader.classList.remove("app-header-active");
    }
  };

  return (
    <div className='App-header app-header-transparent' id="mynav">
      <div className="navbar-name {menu.brand.class}">{menu.brand.name}</div>
      <div className="navbar-links" id="nav-link">
        {
          menu.profile.map((menu, index) => {
            return <div key={index} className="nav-link" id={menu.id}>{menu.title}</div>
          })
        }
      </div>
      <div className="navbar-icons">
        {
          icon.profile.map((icon, index) => {
            return <div key={index} className="app-link" id={icon.id}>{icon.title}</div>
          })
        }
      </div>
    </div>
  );
}

export default NavBar;
