import React from 'react';
import { connect,useDispatch,useSelector } from "react-redux";
import { Card, Col, Row,Button } from "react-bootstrap";
const Cart = () => {
    const dispatch = useDispatch();
    const myCart = useSelector(state => state.myCart);
    const loggedIn_person=useSelector(state=>state.loggedIn_person);
    var netTotal=0;
    return(
        <div>
          
          <Card style={{
            margin:"0 auto",
            height: "400px",
            marginTop: "135px",
            paddingLeft: "20px",
            width:"50%",
          }}>
            <div><h2>Discount available     :   20%</h2></div>
            {myCart?(myCart.map(product=>{
              var price=product.price;
              var quantity=product.quantity;
              var totalPrice=quantity*price;
              netTotal+=(quantity*price*(1-parseFloat(20/100)));
              // console.log(price+"  "+quantity+"  "+totalPrice+"  "+netTotal);
              (<div>
                  
                  <div>Price of Product   : {product.price}</div>
                  <div>Quntity purchased  : {product.quantity}</div>
                  <div>Total              : {totalPrice}</div>
                  <div>Net Total              : {netTotal}</div>
              </div>)
            })):<div><h4>No items selected</h4></div>}
            <h5>Net Amount      :  {netTotal} </h5>
            <Button className="btn btn-success" size="lg" style={{margin:"10px",
              boxShadow: "2px 5px 20px 2px rgba(46, 46, 46, 0.5)", marginTop:"150px"}}>Buy</Button>
          </Card>
          
        </div>
    )
}

export default Cart;