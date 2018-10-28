import React from "react";
import { Link } from 'react-router-dom'
import "./NavigationItem.css";
const NavigationItem = ({ link, active, children }) => {
  return (
    <li className="NavigationItem">
      <Link to={link} className={active ? "active" : null}>
        {children}
      </Link>
    </li>
  );
};

export default NavigationItem;
