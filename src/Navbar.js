import { BiCart } from 'react-icons/bi';
//BsFillPersonFill
import {Link} from 'react-router-dom';
import {MdFavoriteBorder} from "react-icons/md"
import i18next from 'i18next';





const Navbar = (data) => {
    const currentLanguage = i18next.language;
    if(currentLanguage === 'ar'){
        const body = document.getElementsByTagName('body');
        body[0].classList.remove("dir_ltr")
        body[0].classList.add("dir_rtl")
    }else{
        const body = document.getElementsByTagName('body');
        body[0].classList.remove("dir_rtl")
        body[0].classList.add("dir_ltr")
    }
    console.log(currentLanguage)
    function rtl(){
        i18next.changeLanguage('ar')
        const body = document.getElementsByTagName('body');
        body[0].classList.remove("dir_ltr")
        body[0].classList.add("dir_rtl")
        window.location.reload();
    }
    function ltr(){
        i18next.changeLanguage('en')
        const body = document.getElementsByTagName('body');
        body[0].classList.remove("dir_rtl")
        body[0].classList.add("dir_ltr")
        window.location.reload()
    }
    return ( 
    <div className="nav">
        <Link to="/"><h4>E-Store</h4></Link>
        <div className="icons">
        <Link to="/Cart"><div className="badge-2"><BiCart className='icon'/>{data.data&&<div className="badgenumber">{data.data.length}</div>}</div></Link>
        <Link to="/Favorite"><MdFavoriteBorder className='icon'></MdFavoriteBorder></Link>
        <div>
        <div className='icon-2' onClick={()=>ltr()}>EN</div>
        <div className='icon-2' onClick={()=>rtl()}>عربي</div>
        </div>
        </div>
    </div> );
}
 
export default Navbar;