import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css'

const Login = ()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [successful_login, setSuccessful_Login] = useState(false);
    // console.log(username);
    // console.log(password);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        console.log({data});
        try{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
    
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);

            if (result.success){
                setSuccessful_Login(true);
                setTimeout(() => {
                    navigate('/product');
                }, 1000);
            }
        }
        catch(error){
            console.log(error.message);
        }

       
    };

    return(
        <div>
            <h1> Login </h1>
            {successful_login && <h3>Successfully logged in</h3>}
           <form className="form" onSubmit={handleSubmit}>

            <input 
            type="text" id="username" value={username}
            onChange={(e) => setUsername (e.target.value)} 
            required placeholder = "User Name" />  <br/> <br/>

            <input 
             type="password" id="password" value={username}
             onChange={(e) => setPassword(e.target.value)} 
             required placeholder = "Password" />  <br/> <br/>

        <button className="loginbtn" type="submit">
          <Link to="/product">Login</Link>
        </button>
      </form>

        </div>
 
    )
}
export default Login;