import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Tabs = (props) => {
  const {t} = useTranslation()

  const handleClick = (change) => {
    // 👇️ toggle isActive state on click
    props.changeTab(change)
    console.log(props.curr)
    
    const lis = document.getElementsByTagName('li');
    for(let i=0;i<lis.length;i++){
      console.log(lis[i].childNodes.item(0).nodeValue)
      if(lis[i].childNodes.item(0).nodeValue!==props.curr){
        lis[i].classList.remove("active")
        console.log('Nope')
      }else{lis[i].classList.add("active")}
    }
  };
  handleClick(props.curr)
    return ( <div className="tabs">
        <ul>
            <Link to="/Shoes"><li onClick={()=>props.changeTab('Shoes')}>{t('tab_1')}</li></Link>
            <Link to="/T-Shirts"><li onClick={()=>props.changeTab('T-Shirts')}>{t('tab_2')}</li></Link>
            <Link to="/Pants"><li onClick={()=>props.changeTab('Pants')}>{t('tab_3')}</li></Link>
            <Link to="/Accessories"><li onClick={()=>props.changeTab('Accessories')}>{t('tab_4')}</li></Link>
            <Link to="/Glasses"><li onClick={()=>props.changeTab('Glasses')}>{t('tab_5')}</li></Link>
        </ul>
    </div> );
}
 
export default Tabs;