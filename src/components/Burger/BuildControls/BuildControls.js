import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchasable,
  price,
  ordered
}) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button disabled={!purchasable} onClick={ordered} className="OrderButton">
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
