import './index.css';
import Navbar from '../navigation_bar';
import { Link } from 'react-router-dom';

const Home = ()=> {

   
    
    return (
    <div className="main">
        <Navbar/>
        <br />
        <div className='home_cont'>

            <h1 style={{color:"white"}}>Find The Job That Fits Your Life</h1>
            <br />
            <p style={{color:"white"}}>Millions of people are searching for a jobs,salary information company review Find the job that title fits your abilities and potentials.</p>
            <br />
            <br />
            <Link to="/jobs" className='btn btn-primary'>Find Jobs</Link>

        </div>
    </div>
     )
}


export default Home;