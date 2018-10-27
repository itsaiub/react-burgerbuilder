import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Layout>
         <BurgerBuilder />
         <Checkout />
       </Layout>
      </React.Fragment>
    );
  }
}

export default App;
