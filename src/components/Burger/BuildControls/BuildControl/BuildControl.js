import React from "react";
import "./BuildControl.css";

const BuildControl = ({ label, added, removed, disabled }) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button onClick={removed} disabled={disabled} className="Less">
        Less
      </button>
      <button onClick={added} className="More">
        More
      </button>
    </div>
  );
};

export default BuildControl;
