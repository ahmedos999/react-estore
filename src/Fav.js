
import {BsCartPlus} from "react-icons/bs"
import {MdFavorite} from "react-icons/md"
import { Toaster } from 'react-hot-toast';

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
            <button className='fav' onClick={()=>props.removeFav(Favdata.id)}><MdFavorite></MdFavorite>Remove Favorite</button>
            <button className='buy' onClick={(event)=>props.addItem(event,Favdata.name,Favdata.description,Favdata.price,Favdata.img,Favdata.cate,Favdata.id)}><BsCartPlus></BsCartPlus>Add To Cart</button>
        </div>
    </div>
    ))}
    </div>
    <Toaster></Toaster>
</div> );
}
 
export default Fav;