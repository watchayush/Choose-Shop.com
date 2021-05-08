import React, { Component,useState } from "react";
import Select from 'react-select';
import { NavLink, BrowserRouter,Redirect,Link } from "react-router-dom";
import "../Css/Navbar.css";
import Badge from "@material-ui/core/Badge";
import { FaSearch, FaAlignJustify, FaUserCircle } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Navbar.css";
import { connect } from "react-redux";
import Couner from "./Counter";
import Bdge from "./Bdge";
import { Button } from "react-bootstrap";
import history from '../history';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedOption:null,
      redirect:false,
    }
    
  }
  
  handleChange = e => {
    this.setState({selectedOption: e.target.value});
  }

  handleClick = e => {
    console.log(this.state.selectedOption);
    switch (this.state.selectedOption){
      case "men's clothing":
                this.setState({ redirect: true });
                history.push(`/Product/Category/${this.state.selectedOption}`);
                break;
      case "women's clothing":this.setState({ redirect: true });
                history.push(`/Product/Category/${this.state.selectedOption}`);
                break;
      case "jewelery": this.setState({ redirect: true });
                history.push(`/Product/Category/${this.state.selectedOption}`);
      break;
      case "electronics":this.setState({ redirect: true });
                history.push(`/Product/Category/${this.state.selectedOption}`);
      break;
             default: return;
    }
  }

  render() {

    return (
      <div>
        <BrowserRouter>
        <div className="nav">
                   <ul className="menu">
                     <li className="logo"><a href="/">Choose&Shop.com</a></li>
                     <ul className="submenu">
                       <li className="item" style={{width:'200px !important',display:"flex",flexDirection:"row" }}><a href="#" className="slide-center-out">
                            
                              <select style={{width:"170px",height:"35px",
                              border: "2px solid teal",borderRadius:".3rem"}}
                              onChange={this.handleChange}>
                                 <option defaultValue="Select category" selected disabled>Select category</option>
                                 <option value="men's clothing">Men Clothing</option>
                                 <option value="women's clothing">Women Clothing</option>
                                 <option value="jewelery">Jewelery</option>
                                 <option value="electronics">Electronics</option>
                              </select>
                            </a>
                            
                            <Button style={{height:"34px"}}><i className="fa fa-search" aria-hidden="true" onClick={this.handleClick}></i></Button>
                       </li>
                       <li className="item"><a href="#" className="slide-center-out">Contact Us</a></li>
                       <li className="item" onClick={()=>{history.push(`/Cart`)}}><a href="#" className="slide-center-out"><i className="fa fa-shopping-cart"></i><span className="badge1"><Bdge/></span>  Cart</a></li>
                       <li className="item">{this.props.loggedIn_person==null?
                         (<a href="http://localhost:3000/SignIn" className="slide-center-out"><i className="fa fa-user-circle fa-lg"></i> SignIn</a>):
                         <p className="welcome">Welcome&#128516;&nbsp;  {"   " + this.props.loggedIn_person.name.firstname}</p>}</li>
                     </ul>
                   </ul>
                   
                </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn_person: state.loggedIn_person,
  };
}

export default connect(mapStateToProps)(Navbar);