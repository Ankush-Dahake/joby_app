import './index.css';
import {Link} from 'react-router-dom';
import Cookie from 'js-cookie';


   const Navbar =(event)=>{

    //   s

    const token = Cookie.get("myToken");

    const onBtn=()=>{

        Cookie.remove("myToken");

    }

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
            <div><Link to="/login" onClick={onBtn} className='btn btn-primary'>Logout</Link></div>
        </nav>
    )
}

export default Navbar;