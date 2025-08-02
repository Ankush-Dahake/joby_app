import './index.css';
import {Link} from 'react-router-dom';


const Navbar =()=>{

    return(
        <nav className='main_cont'>
            <h3>IMG</h3>
            <ul className='list_items'>
                <li className='list'>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to="/jobs" >Jobs</Link>
                </li>
            </ul>
            <div><Link className='btn btn-primary'>Logout</Link></div>
        </nav>
    )
}

export default Navbar;