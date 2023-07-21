import img from './/imgs/G3.png';
import useFetch from './useFetch';

const Glasses = () => {
    const {data:glasses,isPending,error} = useFetch('http://localhost:8000/glasses')
    return ( <div className="maincontent">
    <h2>Explore our Lastest Products</h2>
    <div className="show">
    {isPending && <div>Loading...</div>}
    {error && <div> {error} </div>}
    {glasses && glasses.map((glasse)=>(
        <div className="card">
        <img src={img} alt="" />
        <div className="badge"><h5>50% Off</h5></div>
        <h4>{glasse.name}</h4>
        <div className="price"><p>{glasse.description}</p> <h6>{glasse.price}$</h6></div>
        <div className="btns">
            <button className='fav'>Add To Cart</button>
            <button className='buy'>Buy Now</button>
        </div>
    </div>
    ))}
    </div>
    
</div> );
}
 
export default Glasses;