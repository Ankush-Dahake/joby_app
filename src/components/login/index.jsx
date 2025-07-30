// import { data } from 'react-router-dom';
import './index.css';


const Login = ()=> {


    const onSubmitBtn= async(event)=>{

          event.preventDefault();
    const api= "https://apis.ccbp.in/login";

        const userDetails = {
             username : "rahul",
             password : "rahul@2021"
            };

        const options = {
              method : "Post",
              body: JSON.stringify(userDetails),
            }

        try {
            const response = await fetch(api,options);
            const data = await response.json();
            console.log(data);
            // console.log("hello");
            
        } catch (error) {
            console.log(error);
            // console.log("hi");
        }
    }


    return (
    <div>
         <form className='form_cont' onSubmit={onSubmitBtn}>
  <div className="form-group">
    <label>Username</label><br />
    <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br />
    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
  </div><br />
  <div className="form-group">
    <label>Password</label><br />
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div><br />
  <div><button type="submit" className="btn btn-primary">Submit</button></div>
</form>

    </div>
)
}


export default Login;