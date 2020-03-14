import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CartPage from './Pages/CartPage';
import ContactPage from './Pages/ContactPage';
import ProductPage from './Pages/ProductPage';
import SingleProductPage from './Pages/SingleProductPage';
import DefaultPage from './Pages/DefaultPage';

import{Route, Switch} from 'react-router-dom';
import Navbar from './Component/Navbar';
import SideCart from './Component/SideCart';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';










// import styled from 'styled-components';



function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <SideCart></SideCart>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/cart" component={CartPage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route exact path="/products" component={ProductPage}></Route>
        <Route exact path="/product/:id" component={SingleProductPage}></Route>
        <Route component={DefaultPage}></Route>
      </Switch>
      <Footer></Footer>
    </Fragment>
  );
}




export default App;
