import './index.css';
import { FaStar,FaBriefcase } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const JobComponent = (props)=>{

    const{Component}= props;

    return(
        <>
        <li style={{color: "white", padding: "10px"}}>
            <div style={{display:"flex"}}>
                <img style={{marginRight:"15px"}} src={Component.company_logo_url} alt="image" width="65px"/>
                <div>
                    <h5>{Component.title}</h5>
                   <div style={{display:"flex"}}> <FaStar style={{marginTop:"5px", marginRight:"3px"}} /><p style={{marginRight:"15px", marginBottom:"0px"}}>{Component.rating}</p></div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", borderBottom:"1px solid gray"}}>
                <div style={{display:"flex", marginTop:"10px"}}>
            <IoLocationSharp style={{marginTop:"5px", marginRight:"3px"}} /><p style={{marginRight:"15px", marginBottom:"0px"}}>{Component.location}</p>
            <FaBriefcase style={{marginTop:"5px", marginRight:"3px"}} /><p style={{marginRight:"15px", marginBottom:"0px"}}>{Component.employment_type}</p>
            </div>
            <div>
                <h6 style={{marginTop:"15px"}}>{Component.package_per_annum}</h6>
            </div>
            </div>
            <p style={{marginTop:"10px"}}>
                {Component.job_description}
            </p>

             
        </li>
        </>
    )
}

export default JobComponent;