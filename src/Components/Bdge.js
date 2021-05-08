import React from 'react';
import { connect,useDispatch,useSelector } from "react-redux";
import { Card, Col, Row,Button } from "react-bootstrap";
const Bdge = () => {
    const myCart = useSelector(state => state.myCart);
    var totalQuantity=0
    var flag=0;
    var calculateQuantity=()=>{
        if(myCart){
            myCart.map(product=>{
                totalQuantity+= product.quantity;
            })
            return totalQuantity;
        }else {
            return
        }
    }
    
    return(
        <span>{calculateQuantity()}</span>
    )

    }
           

export default Bdge;