import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Tabs = (props) => {
  const {t} = useTranslation()

  const handleClick = (e) => {

    const lis = document.getElementsByTagName('li');
    for(let i=0;i<lis.length;i++){
        lis[i].classList.remove("active")
    }
    e.target.classList.add("active");
  };
    return ( <div className="tabs">
        <ul>
            <Link to="/Shoes"><li onClick={(e)=>handleClick(e)}>{t('tab_1')}</li></Link>
            <Link to="/T-Shirts"><li onClick={(e)=>handleClick(e)}>{t('tab_2')}</li></Link>
            <Link to="/Pants"><li onClick={(e)=>handleClick(e)}>{t('tab_3')}</li></Link>
            <Link to="/Accessories"><li onClick={(e)=>handleClick(e)}>{t('tab_4')}</li></Link>
            <Link to="/Glasses"><li onClick={(e)=>handleClick(e)}>{t('tab_5')}</li></Link>
        </ul>
    </div> );
}
 
export default Tabs;