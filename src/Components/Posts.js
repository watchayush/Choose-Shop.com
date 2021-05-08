import React from 'react';
import { Card } from 'react-bootstrap';
import Counter from "./Counter";
import "../Css/Main.css";
const Posts = ({ posts, loading,quantityIncrement,quantityDecrement }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='list-group' style={{display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"row"}}>
      {posts.map(post => (
          <div key={post.id}>
            <Card style={{marginTop:"100px",padding:"2px"}} className="crd">
              <img src={post.image} alt="productImage" className="productImg"/>
            </Card>
            <Card>
              <div className="productTitle">{post.title}</div>
            </Card>
            <Card>
              <div className="quantity"> 
                 <span>Quantity  </span>
                 <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                   <span><button onClick={()=>{quantityDecrement(post)}} style={{fontSize:"0.85rem",backgroundColor:"#007bff",borderRadius:"0.3rem",border:"none"}}>&nbsp;-&nbsp;</button></span>
                   <span><label>&ensp;<Counter id={post.id}/>&ensp;</label></span>
                   <span><button onClick={()=>{quantityIncrement(post)}} style={{fontSize:"0.85rem",backgroundColor:"#007bff",borderRadius:"0.3rem",border:"none"}}>+</button></span>
                 </span>
              </div>
            </Card>
            <Card>
              <span style={{margin: "2px",textAlign:"left",color:"rgb(7, 89, 136)",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                 }}>Price&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                 &nbsp;&#x20B9;&nbsp;{post.price}</span>
            </Card>
         </div>
      ))}
    </div>
  );
};

export default Posts;