import React, { Component ,useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row,Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "../Css/Footer.css";
import "../App.css";

export default function Footer() {
    if(window.location.pathname =='/SignIn' || window.location.pathname =='/Cart'){
        return null;
    }
    return(
        <div className="foot">
           <div className="social">
             <a className="fa fa-twitter" title="" target="_blank" href="#"></a>
             <a className="fa fa-facebook" title="" target="_blank" href="#"></a>
             <a className="fa fa-instagram" title="" target="_blank" href="#"></a>
             <a className="fa fa-linkedin" title="" target="_blank" href="#"></a>
           </div>
        </div>
    )
}