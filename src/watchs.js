
import img from './/imgs/w1.png';
import useFetch from './useFetch';

const Watch = () => {
    const {data:watchs,isPending,error} = useFetch('http://localhost:8000/watch')
    return ( <div className="maincontent">
    <h2>Explore our Lastest Products</h2>
    <div className="show">
    {isPending && <div>Loading...</div>}
    {error && <div> {error} </div>}
    {watchs && watchs.map((watch)=>(
        <div className="card">
        <img src={img} alt="" />
        <h4>{watch.name}</h4>
        <p>{watch.description}</p>
        <div className="btns">
            <button className='fav'>Favorite</button>
            <button className='buy'>Buy Now</button>
        </div>
    </div>
    ))}
    </div>
    
</div> );
}
 
export default Watch;