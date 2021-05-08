import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';
import React from "react";
import { Switch,Route,withRouter} from 'react-router-dom';
// import {} from "react-browser-router";
import Main from "./Components/Main";
import Purchase from "./Components/Purchase";
import SignIn from "./Components/SignIn";
import Product from "./Components/Product";
import Category from "./Components/Category";
import Cart from "./Components/Cart";


class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Purchase" component={Purchase} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Product" exact component={Product} />
          <Route path="/Product/Category/:name" component={Category} />
        </Switch>
      <Footer/>
    </div>
  );
  }
}

export default withRouter(App);
