import './index.css';
import Navbar from '../navigation_bar';
import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';

const Jobs = ()=> {

     const[allVal,setVal]= useState({

            arrData:[],
        });

        const{arrData}=allVal;
    const token= Cookies.get("myToken");

    useEffect(()=>{

        

        const datFetch =async()=>{
            
        const api = "https://apis.ccbp.in/jobs";

        const options = {
            method: "Get",
            headers: {
                Authorization : `Bearer ${token}`
            }
        }

        try {

            const response = await fetch(api,options);
            const data =await response.json();
              
              if(response.ok){
                setVal({...allVal,arrData: data.jobs});
              }
            
        } catch (error) {
            console.log(error);
        }

        }

        datFetch();

    },[]);




    return (
        <div className='main'>
            <Navbar/>
            <div className='job_cont'>

                <div className='job_left_cont'>
                    <div className='job_left_id_cont'>

                    </div>
                </div>

                <div className='job_right_cont'></div>

            </div>

        </div>

        
    )
}


export default Jobs;