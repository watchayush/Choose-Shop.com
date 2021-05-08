import React from 'react';
import { connect,useDispatch,useSelector } from "react-redux";
import { Card, Col, Row,Button } from "react-bootstrap";
const Counter = (props) => {
    const myCart = useSelector(state => state.myCart);
    var totalQuantity=0
    var flag=0;
    var calculateQuantity=()=>{
        if(myCart){
            return myCart.map(product=>{
                  if(parseInt(product.id)==parseInt(props.id)){
                    flag=1;
                    console.log(product.quantity+"  quantity "+product.id)
                    return product.quantity;
                }
            })
            if(flag==0){
                return 0
            }
        }else {
            return 0
        }
    }
    
    return(
        <span>{calculateQuantity()}</span>
    )

    }
           

export default Counter;