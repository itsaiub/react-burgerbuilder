import React from "react";
import { NavLink } from 'react-router-dom'
import "./NavigationItem.css";
const NavigationItem = ({ link, exact, children }) => {
  return (
    <li className="NavigationItem">
      <NavLink exact={exact} to={link} >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
