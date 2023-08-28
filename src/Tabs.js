import {Link} from 'react-router-dom';

const Tabs = () => {
//   const [isActive, setIsActive] = useState(false);
//lis[i].childNodes.item(0).nodeValue

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    
    const lis = document.getElementsByTagName('li');
    for(let i=0;i<lis.length;i++){
        lis[i].classList.remove("active")
    }
    event.currentTarget.classList.add('active');
  };
    return ( <div className="tabs">
        <ul>
            <Link to="/shoes"><li onClick={handleClick}>Shoes</li></Link>
            <Link to="/tshirts"><li onClick={handleClick}>T-Shirts</li></Link>
            <Link to="/pants"><li onClick={handleClick}>Pants</li></Link>
            <Link to="/watchs"><li onClick={handleClick}>Accessories</li></Link>
            <Link to="/glasses"><li onClick={handleClick}>Glasses</li></Link>
        </ul>
    </div> );
}
 
export default Tabs;