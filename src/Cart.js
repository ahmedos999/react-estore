import img from './/imgs/S2.png'

const Cart = () => {
    return ( <div className="shop">
    <div className="cart">
        <h4>Shopping Cart</h4>
        <h4>2 items</h4>
        <div className="cart-item">
            <img src={img} alt="" />
            <h4>Nike shoes</h4>
            <h6>Quantiy - 1</h6>
            <h4>Price - 20.00$</h4>

        </div>
    </div>
</div> );
}
 
export default Cart;