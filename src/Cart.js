import { useState } from 'react';
// import img from './/imgs/S2.png'
import {RiDeleteBin6Line} from 'react-icons/ri'
import useFetch from './useFetch';


const Cart = () => {
    const [counter,setCounter] = useState(1);
    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCounter(function (prevCount) {
          return (prevCount += 1);
        });
      }
    
      function decrement() {
        setCounter(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }

      const {data,isPending,error} = useFetch('http://localhost:8000/cart')

      const handleDelete = (id)=>{
        fetch('http://localhost:8000/cart/'+id,{
            method:'DELETE',
        }).then(()=>{
            console.log('new data added')
        })
      }

    return ( <div>
      {/* <h2>Shopping Cart - 2 items</h2> */}
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}

      {data&&<div className="shop-2">
      <h2>Shopping Cart - 2 items</h2>
      <div>
        <div className='payment-details'>
            <h2>Order Summary</h2>
            <div className="row"><h6>Subtotal</h6> <h6>$20.00$</h6></div>
            <div className="row"><p>Delivery</p><p>Free</p></div>
            <div className="row"><p>VAT & TAX</p><p>0%</p></div>
            <div className="row"><h6>Total</h6><h6>20.00$</h6></div>
            <button className='checkout-btn'>Checkout</button>
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
                  
                  <h4>Size - M</h4>
                  <h4>Color - Black</h4>
                  <h4>Pickup Style - In Store</h4>
      
                  <div className="counter">
                      <button onClick={decrement}>-</button>
                      <h4>{counter}</h4>
                      <button onClick={increment}>+</button>
                  </div>
                  
                  </div>
                  <div className='options'>
                  <div>
                      <RiDeleteBin6Line className='delete-icon' onClick={()=>handleDelete(data.id)}></RiDeleteBin6Line>
                  </div>
                  <h3>Price - 20.00$</h3>
                  </div>
      
              </div>
          </div>
          </div>  
      ))}
      
    </div>
    );
}
 
export default Cart;