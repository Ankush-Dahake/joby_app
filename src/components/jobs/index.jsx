import './index.css';
import Navbar from '../navigation_bar';
import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
import JobComponent from '../jobContent';
import IdComponent from '../id_cont';

const Jobs = ()=> {

    const arrSalartRang= [
        {
            id: 1,
            range : "10 LPA and above"
        },
        {
            id: 2,
            range : "20 LPA and above"
        },
        {
            id: 3,
            range : "30 LPA and above"
        },
        {
            id: 4,
            range : "40 LPA and above"
        },
    ];

    const arrCheck = [
        {
            id: "FULLTIME",
            checkBox:"Full Time"
        },
        {
            id: "PARTTIME",
            checkBox:"Part Time"
        },
        {
            id: "FREELANCS",
            checkBox:"Freelance"
        },
        {
            id: "INTERNSHIP",
            checkBox:"InternShipe"
        }
    ];

     const[allVal,setVal]= useState({

            arrData:[],
            profileDetail:{},
            searchVal:"",
            empType:[],
            minPackage:""
        });


        const{arrData,searchVal,empType,minPackage}=allVal;
        const token= Cookies.get("myToken");

    useEffect(()=>{
        console.log(arrData.employment_type);

        const datFetch =async()=>{
            
        const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${minPackage}&search=${searchVal}`;
        const Idapi = "https://apis.ccbp.in/profile";


        const options = {
            method: "Get",
            headers: {
                Authorization : `Bearer ${token}`
            }
        }

        try {

            const response = await fetch(api,options);
            const data =await response.json();

            const IdRes = await fetch(Idapi,options);
            const IdData =await IdRes.json();
              
              if(response.ok){
                setVal({...allVal,arrData: data.jobs,profileDetail:IdData.profile_details});
              }
            
        } catch (error) {
            console.log(error);
        }

        }

        datFetch();

    },[allVal.searchVal,allVal.empType]);

    const onChangeBtn=(e)=>{

        if(e.key === "Enter"){
            setVal({...allVal,searchVal: e.target.value});
        }
    }
    const onChangeEmpType=(e)=>{

        const isChecked = e.target.checked;
        const value = e.target.value;

        if(isChecked){

            setVal({...allVal,empType: [...allVal.empType,value]});

            

        }
        else{

            setVal({...allVal,empType:allVal.empType.filter((val)=> val !== value)});

        }

    }



    return (
        <div className='main'>
            <Navbar/>
            <div className='job_cont'>

                <div className='job_left_cont'>
                    <div className='job_left_id_cont' style={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center"}}>
                         <div className='init_l'>
                            <img src={allVal.profileDetail.profile_image_url} alt="image" />
                         </div>
                         <h3 style={{color:"black"}}>{allVal.profileDetail.name}</h3>
                         <p style={{color:"black", fontSize:"16px", fontWeight:"700"}}>{allVal.profileDetail.short_bio}</p>
                    </div>
                    <hr className='part'/>
                    <h5 style={{color:"wheat", marginBottom:"20px"}}>Type Of Employement</h5>
                    {
                        arrCheck.map((e)=><ul key={e.id} style={{listStyle: "none", borderRadius: "15px" }}>
                        <div style={{display:"flex"}}>
                            <input onChange={onChangeEmpType} type="checkbox" value={e.id} /><h6 style={{color:"white", margin:"0px", marginLeft:"5px"}}>{e.checkBox}</h6>
                        </div>
                        </ul>)
                    }
                    <hr className='part'/>
                    <h5 style={{color:"wheat", marginBottom:"20px"}}>Salary Range</h5>
                    {
                        arrSalartRang.map((e)=><ul key={e.id} style={{listStyle: "none", borderRadius: "15px" }}>
                        <div style={{display:"flex"}}>
                           <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                           <label style={{color:"white", margin:"0px", marginLeft:"5px"}} htmlFor="javascript">{e.range}</label>
                        </div>
                        </ul>)
                    }

                </div>

                <div className='job_right_cont'>

                    <div style={{width:"100%", height:"35px", display:"flex", justifyContent:"center", marginBottom:"15px"}}>
                        <input onKeyUp={onChangeBtn} style={{width:"50%", height:"100%", padding:"10px", borderRadius:"10px"}}  type="text" placeholder='search your job'/>
                    </div>

                        {
                            arrData.map((e)=><ul key={e.id} className='job_list' style={{listStyle: "none", borderRadius: "15px"}}>
                                <JobComponent Component={e}/>
                            </ul>)
                        }
                    
                </div>

            </div>

        </div>

        
    )
}


export default Jobs;