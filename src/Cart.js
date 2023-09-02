// import { useState} from "react";
// import img from './/imgs/S2.png'
import {RiDeleteBin6Line} from 'react-icons/ri'
// import useFetch from './useFetch';
// import toast, { Toaster } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";



const Cart = ({data,isPending,error,getTotal,handleDelete,updateCounter}) => {
  // console.log(getTotal)
    // const [counter,setCounter] = useState(1);
    // // const [cartinfo,setCartInfo] = useState(0)
    // // const notify = () => toast.error('Item has been Removed');
    // function increment() {
    //     //setCount(prevCount => prevCount+=1);
    //     setCounter(function (prevCount) {
    //       return (prevCount += 1);
    //     });
    //   }
    
    //   function decrement() {
    //     setCounter(function (prevCount) {
    //       if (prevCount > 0) {
    //         return (prevCount -= 1); 
    //       } else {
    //         return (prevCount = 0);
    //       }
    //     });
    //   }

      const navigate = useNavigate();

      function handleClick() {
        navigate("pdf");
      }


      

    return ( <div>
      {/* <h2>Shopping Cart - 2 items</h2> */}
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}

      {data &&
      <div className="shop-2">
      <h2>Shopping Cart - {data.length} items</h2>
      <div>
        <div className='payment-details'>
            <h2>Order Summary</h2>
            <div className="row"><h6>Subtotal</h6> <h6>{Number(getTotal(data)).toFixed(2)}$</h6></div>
            <div className="row"><p>Delivery</p><p>Free</p></div>
            <div className="row"><p>VAT & TAX</p><p>{Number(getTotal(data)*0.15).toFixed(2)}$</p></div>
            <div className="row"><h6>Total</h6><h6>{Number(getTotal(data)+getTotal(data)*0.15).toFixed(2)}$</h6></div>
            <button className='checkout-btn' onClick={handleClick}>Checkout</button>
          </div>
          </div></div>}

       {data && data.map((data)=>(
         <div className="shop">
          <div className="cart">
          

              <div className="cart-item">
              <img src={require(`${data.img}`)} alt="" />
                  <div className="cart-details">
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                  
                  <h4>Size - {data.size}</h4>
                  <h4>Color - Black</h4>
                  <h4>Pickup Style - In Store</h4>
      
                  <div className="counter">
                      <button onClick={()=>updateCounter(data.id,'-')}>-</button>
                      <h4>{data.counter}</h4>
                      <button onClick={()=>updateCounter(data.id,'+')}>+</button>
                  </div>
                  
                  </div>
                  <div className='options'>
                  <div>
                      <RiDeleteBin6Line className='delete-icon' onClick={()=>handleDelete(data.id)}></RiDeleteBin6Line>
                  </div>
                  <h3>Price : {Number(data.total).toFixed(2)}$</h3>
                  </div>
      
              </div>
          </div>
          </div>  
      ))}
      <Toaster />
    </div>
    );
}
 
export default Cart;