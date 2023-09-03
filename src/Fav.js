
import {BsCartPlus} from "react-icons/bs"
import {MdFavorite} from "react-icons/md"
import { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom';
import img from './/imgs/wishlist.svg'
import { useTranslation } from 'react-i18next'
const Fav = (props) => {
    const {t} = useTranslation()
    return ( <div className="maincontent">
    <h2>{t('fav')} <MdFavorite></MdFavorite></h2>
    <div className="show">
    {props.FavisPending && <div>{t('loading')}</div>}
    {props.Faverror && <div> {props.Faverro} </div>}
    {props.Favdata && 
    props.Favdata.length!==0?
    props.Favdata.map((Favdata)=>(
        <div className="card">
        <Link to={`/${Favdata.cate}/${Favdata.id}`}><img src={require(`${Favdata.img}`)} alt="" /></Link>
        <div className="badge"><h5>50% Off</h5></div>
        <h4>{Favdata.name}</h4>
        <div className="price"><p>{Favdata.description}</p> <h6>{Favdata.price}$</h6></div>
        <div className="btns">
            <button className='fav' onClick={()=>props.removeFav(Favdata.id)}><MdFavorite></MdFavorite>Remove Favorite</button>
            <button className='buy' onClick={(event)=>props.addItem(event,Favdata.name,Favdata.description,Favdata.price,Favdata.img,Favdata.cate,1,Favdata.size,Favdata.color,Favdata.price,Favdata.id)}><BsCartPlus></BsCartPlus>Add To Cart</button>
        </div>
    </div>
    ))
    :<div className="wishlist"><img src={img} alt="Empty wishlist" />
    <h2>{t('fav_placeholder')} <MdFavorite></MdFavorite></h2></div>
    }
    </div>
    <Toaster></Toaster>
</div> );
}
 
export default Fav;