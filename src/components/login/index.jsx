// import { data } from 'react-router-dom';
import './index.css';
import { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';


const Login = ()=> {

    const [allVal,setVal]= useState({
        username : "",
        password : "",
        errorMess: ""
    });

    const token = Cookies.get("myToken");

    useEffect(()=>{

        if(token !== undefined){
            navigate("/");
        }

    },[]);

     const navigate = useNavigate();

    const {username,password}= allVal;

    const onSubmitBtn= async(event)=>{

        console.log(allVal.username,allVal.password);

         event.preventDefault();
    const api= "https://apis.ccbp.in/login";

        const userDetails = {
             username : username,
             password : password
            }

        const options = {
              method : "Post",
              body: JSON.stringify(userDetails),
            }

        try {
            const response = await fetch(api,options);
            const data = await response.json();
            console.log(response);
            console.log(data);

            if(response.ok){

                setVal({...allVal,errorMess: ""});

                Cookies.set("myToken",data.jwt_token);

                navigate("/");

            }
            else{
                setVal({...allVal,errorMess: data.error_msg});
            }
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
    <div>
         <form className='form_cont' onSubmit={onSubmitBtn}>
  <div className="form-group">
    <label>Username</label><br />
    <input onChange={(e)=>{setVal({...allVal,username : e.target.value})}} type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br />
    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
  </div><br />
  <div className="form-group">
    <label>Password</label><br />
    <input onChange={(e)=>{setVal({...allVal,password : e.target.value})}} type="password" className="form-control" id="exampleInputPassword1"/>
  </div><br />
  <div><button type="submit" className="btn btn-primary">Submit</button></div>
  <p style={{color: "red"}}>{allVal.errorMess}</p>
</form>

    </div>
)
}


export default Login;