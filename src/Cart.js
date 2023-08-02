import img from './/imgs/S2.png'

const Cart = () => {
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
            
            </div>
            <div className='options'>
            <h4>Quantiy - 1</h4>
            <h3>Price - 20.00$</h3>
            </div>

        </div>
    </div>
</div> );
}
 
export default Cart;