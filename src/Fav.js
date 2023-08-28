import {useState,useEffect } from "react";
import {BsCartPlus} from "react-icons/bs"
import {MdFavorite} from "react-icons/md"

const Fav = () => {
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setErr] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
        fetch('http://localhost:8000/fav',{signal:abortCont.signal})
        .then(res =>{
            
        if(!res.ok){
            throw Error('Could not find the data');
            
        }
            return res.json();
            
        }).then(data => {
            setData(data)
            setIsPending(false)
            setErr(null)
        }).catch(e=>{
            if(e.name !=='AbortError'){
            setErr(e.message)
            setIsPending(false)
            }else{
                console.log('Error aborted')
            }

        })
        },1000);
        return () => abortCont.abort();


    },[])
    return ( <div className="maincontent">
    <h2>Your Favorites <MdFavorite></MdFavorite></h2>
    <div className="show">
    {isPending && <div>Loading...</div>}
    {error && <div> {error} </div>}
    {data && data.map((data)=>(
        <div className="card">
        <img src={require(`${data.img}`)} alt="" />
        <div className="badge"><h5>50% Off</h5></div>
        <h4>{data.name}</h4>
        <div className="price"><p>{data.description}</p> <h6>{data.price}$</h6></div>
        <div className="btns">
            <button className='fav'><MdFavorite></MdFavorite>Remove Favorite</button>
            <button className='buy'><BsCartPlus></BsCartPlus>Add To Cart</button>
        </div>
    </div>
    ))}
    </div>
    
</div> );
}
 
export default Fav;