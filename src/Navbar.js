import { BiCart } from 'react-icons/bi';
//BsFillPersonFill
import { BsFillPersonFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
    
    <div className="nav">
        <h4>E-Store</h4>
        <div className="icons">
        <Link to="/Cart"><div className="badge-2"><BiCart className='icon'/><div className="badgenumber">2</div></div></Link>
        <BsFillPersonFill className='icon'></BsFillPersonFill>
        </div>
    </div> );
}
 
export default Navbar;