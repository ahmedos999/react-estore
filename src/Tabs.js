import {Link} from 'react-router-dom';

const Tabs = () => {
//   const [isActive, setIsActive] = useState(false);

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
            <Link to="/"><li className="active" onClick={handleClick}>Shoes</li></Link>
            <Link to="/tshirts"><li onClick={handleClick}>T-Shirts</li></Link>
            <li onClick={handleClick}>Pants</li>
            <li onClick={handleClick}>Accessories</li>
            <li onClick={handleClick}>Glasses</li>
        </ul>
    </div> );
}
 
export default Tabs;