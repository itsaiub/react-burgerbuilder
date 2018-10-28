import React, { Component } from "react";
import axios from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

export class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Your Name" },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: "input",
        elementConfig: { type: "email", placeholder: "Your Email" },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      phone: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Your Phone Number" },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      street: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Street" },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      postalCode: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Postal Code" },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 9
        },
        valid: false
      },
      country: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Country" },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};
    for (let formElementIndentifier in this.state.orderForm) {
      formData[formElementIndentifier] = this.state.orderForm[
        formElementIndentifier
      ].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price.toFixed(2),
      orderData: formData
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  checkValidity = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
    }
    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength;
    }
    return isValid;
  };

  inputChangedHandler = (event, inputIndentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIndentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIndentifier] = updatedFormElement;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    console.log(updatedFormElement);

    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}

        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
