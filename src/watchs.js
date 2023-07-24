
import useFetch from './useFetch';
import {BsCartPlus} from "react-icons/bs"

const Watch = () => {
    const {data:watchs,isPending,error} = useFetch('http://localhost:8000/watchs')
    return ( <div className="maincontent">
    <h2>Explore our Lastest Products</h2>
    <div className="show">
    {isPending && <div>Loading...</div>}
    {error && <div> {error} </div>}
    {watchs && watchs.map((watch)=>(
        <div className="card">
        <img src={require(`${watch.img}`)} alt="" />
        <div className="badge"><h5>50% Off</h5></div>
        <h4>{watch.name}</h4>
        <div className="price"><p>{watch.description}</p> <h6>{watch.price}$</h6></div>
        <div className="btns">
            <button className='fav'><BsCartPlus></BsCartPlus>Add To Cart</button>
            <button className='buy'>Buy Now</button>
        </div>
    </div>
    ))}
    </div>
    
</div> );
}
 
export default Watch;