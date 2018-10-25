import React from "react";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
