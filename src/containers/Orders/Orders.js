import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../components/withErrorHandler/withErrorHandler";
import * as orderActions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

export class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orderss = <Spinner />;
    if (!this.props.loading) {
      orderss = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orderss}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(orderActions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
