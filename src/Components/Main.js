import React, { Component ,useState,useEffect} from "react";
import { connect,useDispatch,useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Footer from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Card, Col, Row,Button } from "react-bootstrap";
import "../Css/Main.css"
import Paginate from "./Paginate";
import Posts from "./Posts";
import "../App.css";

function Main() {
  
  var product;
  const dispatch = useDispatch();
  const myCart = useSelector(state => state.myCart);
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [purchasedProducts,setPurchasedProducts]=useState([]);
  // const [product,setProduct]=useState({id:'',quantity:''});
    useEffect(()=>{
      setLoading(true);
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
          setPosts(res.data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
        
    },[])
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    
    //setQuantity
    const quantityIncrement = goods =>{
      if(purchasedProducts.length==0){
        purchasedProducts.push({["id"]:(parseInt(goods.id)),["title"]:goods.title,["price"]:(parseFloat(goods.price)),
        ["category"]:goods.category,["image"]:goods.image,["quantity"]:1});
      }
      else{
        var flag=0;
        var x=purchasedProducts.filter(item=>{
          if(parseInt(item.id)==parseInt(goods.id)){
            
            var itemCopy=item;
            itemCopy.quantity+=1;
            product=itemCopy;
            flag=1;
            console.log(product);
          }else{
            console.log("inside else");
            return item;
          }
        })
        if(flag==1){
          x.push(product);
          product=null;
          setPurchasedProducts(x);
          console.log(purchasedProducts);
        }
        else{
          console.log("inside second else");
          x.push({["id"]:(parseInt(goods.id)),["title"]:goods.title,["price"]:(parseFloat(goods.price)),
          ["category"]:goods.category,["image"]:goods.image,["quantity"]:1});
          console.log(x);
          setPurchasedProducts(x);
          console.log(purchasedProducts);
        }
      }
      dispatch(updateCart(purchasedProducts));
      console.log(myCart);
    }

    const quantityDecrement = goods => {
      if(purchasedProducts.length===0){
        return 
      }
      else{
        var flag=0; var zeroQuantity=0;
        var x=purchasedProducts.filter(item=>{
          if(parseInt(item.id)==parseInt(goods.id)){
            
            var itemCopy=item;
            itemCopy.quantity-=1;
            if(itemCopy.quantity>0){
              product=itemCopy;
              flag=1;
              console.log(product);
            }else{
              zeroQuantity=1;
              return;
            }
          }else{
            console.log("inside else");
            return item;
          }
        })
        if(flag==1){
          x.push(product);
          product=null;
          setPurchasedProducts(x);
          console.log(purchasedProducts);
        }
        else{
          if(zeroQuantity==1){
            setPurchasedProducts(x);
            console.log(purchasedProducts);
            return;
          }else{
            return;
          }
        }
      }
      dispatch(updateCart(purchasedProducts));
      console.log(myCart);
    }
    
    return (
        <div className="main">
            <Posts posts={currentPosts} 
            quantityIncrement={quantityIncrement}
            quantityDecrement={quantityDecrement}
            loading={loading} />
            <Button className="btn btn-success" size="lg" style={{margin:"10px",
              boxShadow: "2px 5px 20px 2px rgba(46, 46, 46, 0.5)"}}
              onClick={() => history.push('/Cart')}>Move to Cart</Button>
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
            <Footer/>
         </div>
    );
}

function updateCart(updatedCart) {
  console.log("inside loggin In action function");
  return {
    type: "UPDATE_CART",
    myCart: updatedCart,
  };
}

export default Main;