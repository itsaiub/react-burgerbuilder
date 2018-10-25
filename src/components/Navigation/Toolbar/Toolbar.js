import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = props => {
  return <header className="Toolbar">
      <div>MENU</div>
      <div className='Logo1'>
        <Logo />
      </div>
    <nav className='DesktopOnly'>
        <NavigationItems />
      </nav>
    </header>;
};

export default Toolbar;
