
import {BsCartPlus} from "react-icons/bs"
import {MdFavorite} from "react-icons/md"

const Fav = (props) => {
    return ( <div className="maincontent">
    <h2>Your Favorites <MdFavorite></MdFavorite></h2>
    <div className="show">
    {props.FavisPending && <div>Loading...</div>}
    {props.Faverror && <div> {props.Faverro} </div>}
    {props.Favdata && props.Favdata.map((Favdata)=>(
        <div className="card">
        <img src={require(`${Favdata.img}`)} alt="" />
        <div className="badge"><h5>50% Off</h5></div>
        <h4>{Favdata.name}</h4>
        <div className="price"><p>{Favdata.description}</p> <h6>{Favdata.price}$</h6></div>
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