import { useState } from 'react';
import img from './/imgs/S2.png'
import {RiDeleteBin6Line} from 'react-icons/ri'


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

    return ( <div className="shop">
    <div className="cart">
        <h2>Shopping Cart - 2 items</h2>
        <div className="cart-item">
            <img src={img} alt="" />
            <div className="cart-details">
            <h2>Nike shoes</h2>
            <p>high Quality Nike shoes</p>
            
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
                <RiDeleteBin6Line className='delete-icon'></RiDeleteBin6Line>
            </div>
            <h3>Price - 20.00$</h3>
            </div>

        </div>
    </div>
</div> );
}
 
export default Cart;