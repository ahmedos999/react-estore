import { BiCart } from 'react-icons/bi';
//BsFillPersonFill
import { BsFillPersonFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
    
    <div className="nav">
        <h4>E-Store</h4>
        <div className="icons">
            <Link to="/Cart"><BiCart className='icon'/></Link>
            <BsFillPersonFill className='icon'></BsFillPersonFill>
        </div>
    </div> );
}
 
export default Navbar;