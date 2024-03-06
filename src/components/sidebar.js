import "../components/sidebar.css";
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


const SideBar = () => {
    const App = () => {
        const [width, setWidth] = useState(window.innerWidth);
        const breakpoint = 700; // Set your desired breakpoint
      
        useEffect(() => {
          const handleResizeWindow = () => setWidth(window.innerWidth);
          window.addEventListener('resize', handleResizeWindow);
      
          return () => {
            window.removeEventListener('resize', handleResizeWindow);
          };
        }, []);

        // const isMobile = {
        // if (width > breakpoint) {
        //     return (
        //       <div>
        //         <p>Current width is {width}px</p>
        //       </div>
        //     );
        //   } else {
        //     return (
        //       <div>
        //         <h3>Component 2</h3>
        //         <p>Current width is {width}px</p>
        //       </div>
        //     );
        //   }
        // };
    }









  return(
    <div>
        <div class="container">
        <button id="icon-btn">
          <MdMenu />
        </button>
      </div>

      <div className="mobile-menu {isMobile}">
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