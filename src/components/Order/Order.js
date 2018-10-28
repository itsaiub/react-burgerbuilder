import React from "react";
import "./Order.css";

const Order = ({ ingredients, price }) => {
  const ingredient = [];

  for (const ingredientName in ingredients) {
    ingredient.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredient.map(ig => {
    return (
      <span key={ig.name} style={
        {textTransform: 'capitalize', 
        display: 'inline-block', 
        margin:'0 8px', 
        border: '1px solid #ccc', 
        padding: '5px'}} >
        {ig.name} ({ig.amount}){" "}
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Ingredients:  {ingredientOutput} </p>
      <p>
        Price: <strong>USD {price} </strong>
      </p>
    </div>
  );
};

export default Order;
