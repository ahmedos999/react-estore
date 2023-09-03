
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import img from './/imgs/empty_cart.svg'



const Cart = ({data,isPending,error,getTotal,handleDelete,updateCounter}) => {

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

       {data &&
       data.length !== 0?
       data.map((data)=>(
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
      )):<div className="empty-cart"><img src={img} alt="Empty wishlist" />
      <h2>Your Cart is Empty Try adding some items</h2></div>}
      <Toaster />
    </div>
    );
}
 
export default Cart;