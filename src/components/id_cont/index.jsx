import { useState } from "react";
import Cookie from 'js-cookie'

const IdComponent= ()=>{

    const token = Cookie.get("myToken");

    const DataFetch= async()=>{

        const api="https://apis.ccbp.in/profile";

        const options ={
            method: "Get",
            headers: {
                Authorization : `Bearer ${token}`
            }
        }
        
        try {

            const response = await fetch(api,options);

            const data = await response.json();

            console.log(data);
            
        } catch (error) {
            console.log(error);
        }

    }
    DataFetch()

      return (
        <>
           
                    <div className='job_left_id_cont' style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                         <div className='init_l'>
                            <IdComponent/>
                         </div>
         </div>
        </>
      )

}

export default IdComponent;