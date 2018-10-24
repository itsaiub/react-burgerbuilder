import React from "react";
import "./Layout.css";

const Layout = props => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
