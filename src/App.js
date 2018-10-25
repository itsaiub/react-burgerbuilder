import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Layout>
         <BurgerBuilder />
       </Layout>
      </React.Fragment>
    );
  }
}

export default App;
