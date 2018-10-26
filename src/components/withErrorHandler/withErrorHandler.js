import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, Axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptor = Axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });

      this.resInterceptor = Axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      Axios.interceptors.request.eject(this.reqInterceptor);
      Axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
