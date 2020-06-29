import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import BurgerBuilder from './Containers/BurgerBuilder/burgerBuilder';

 class App extends Component {
   render() {
     return (
       <div>
       <Layout>
         <BurgerBuilder />
         </Layout>
       </div>
     );
   }
 }

 export default App;
