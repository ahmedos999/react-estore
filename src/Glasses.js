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
        <p>{glasse.description}</p>
        <div className="btns">
            <button className='fav'>Favorite</button>
            <button className='buy'>Buy Now</button>
        </div>
    </div>
    ))}
    </div>
    
</div> );
}
 
export default Glasses;