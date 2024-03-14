import "../components/sidebar.css";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";

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



function SideBar() {
  return (
    <div >
        <div className="container">
          <button type="button" id="icon-btn">
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