import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({ ingredients, price, purchaseCanceled, purshaseContinued }) => {
  const ingredientsSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={purchaseCanceled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={purshaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
