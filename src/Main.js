import img from './/imgs/1-1.png';
import { FaHeart } from "react-icons/fa";


const Main = () => {
    return ( <div className="maincontent">
        <h2>Explore our Lastest Products</h2>
        <div className="show">
        <div className="card">
            <img src={img} alt="" />
            <h4>Nike Snikers</h4>
            <p>High quailty shoes for men and women</p>
            <div className="btns">
                <button className='fav'>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        <div className="card">
            <img src={img} alt="" />
            <h4>Nike Snikers</h4>
            <p>High quailty shoes for men and women</p>
            <div className="btns">
                <button className='fav'><FaHeart style={{color: 'red'}}></FaHeart>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        <div className="card">
            <img src={img} alt="" />
            <h4>Nike Snikers</h4>
            <p>High quailty shoes for men and women</p>
            <div className="btns">
                <button className='fav'>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        <div className="card">
            <img src={img} alt="" />
            <h4>Nike Snikers</h4>
            <p>High quailty shoes for men and women</p>
            <div className="btns">
                <button className='fav'>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        <div className="card">
            <img src={img} alt="" />
            <h4>Nike Snikers</h4>
            <p>High quailty shoes for men and women</p>
            <div className="btns">
                <button className='fav'>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        <div className="card">
            <img src={img} alt="" />
            <h4>Nike Snikers</h4>
            <p>High quailty shoes for men and women</p>
            <div className="btns">
                <button className='fav'>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        </div>
        
    </div> );
}
 
export default Main;