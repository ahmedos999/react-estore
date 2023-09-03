
import {BsStarFill} from "react-icons/bs"
import {BsStarHalf} from "react-icons/bs"
import {SiNike} from "react-icons/si"
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next'

const Product = (props) => {
    const {t} = useTranslation()
    var {id,product} = useParams()
    const {data:shoe,isPending,error} = useFetch('http://localhost:8000/'+product+'/'+id);

    return (
         <div className="product-page">
        {isPending && <div>{t('loading')}</div>}
        {error && <div> {error} </div>}
        
        {shoe && <img src={require(`${shoe.img}`)} alt="" />}
        {shoe && <div className="product-details">
            
        <h2>{shoe.name} <span><SiNike className='nike'></SiNike></span></h2>
        <p>{t('des')}</p>
        <div className="rate"><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarHalf className='rating-icon'/></div>
        <div className="item-size"><h5>{t('size')} - {shoe.size}</h5><h5>{t('color')} - {shoe.color}</h5></div>
        <div className="original-price">{t('price')}: <span>{shoe.price/2}$</span>{shoe.price}$</div>

        <div className="extra-info">
            <div className="delivery"><h4>{t('Delivery_2')}</h4><p>{t('not')}</p></div>
            <div className="delivery"><h4>{t('Product_price')}</h4><p>{shoe.price}$</p></div>
            <div className="delivery"><h4>{t('VAT_&_TAX')}</h4><p>{shoe.price * 15/100}$</p></div>
            <div className="Total"><h4>{t('Total_2')}</h4><p>{shoe.price+shoe.price * 15/100}$</p></div>
        </div>
        <div className="btn-container">
        <button className='buy-2' onClick={(event)=>props.addItem(event,shoe.name,shoe.description,shoe.price,shoe.img,shoe.cate,1,shoe.size,shoe.color,shoe.price,shoe.id)}>{t('Confirm')}</button>
        </div>
        <Toaster />
        
        </div>}

    </div> );
}
 
export default Product;