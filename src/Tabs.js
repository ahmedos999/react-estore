import {Link} from 'react-router-dom';

const Tabs = (props) => {
  // console.log(props.changeTab)
//   const [isActive, setIsActive] = useState(false);
//lis[i].childNodes.item(0).nodeValue

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
            <Link to="/shoes"><li onClick={()=>props.changeTab('Shoes')}>Shoes</li></Link>
            <Link to="/tshirts"><li onClick={()=>props.changeTab('T-Shirts')}>T-Shirts</li></Link>
            <Link to="/pants"><li onClick={()=>props.changeTab('Pants')}>Pants</li></Link>
            <Link to="/watchs"><li onClick={()=>props.changeTab('Accessories')}>Accessories</li></Link>
            <Link to="/glasses"><li onClick={()=>props.changeTab('Glasses')}>Glasses</li></Link>
        </ul>
    </div> );
}
 
export default Tabs;