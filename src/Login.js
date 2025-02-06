import { useState } from "react";

const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState(false);
    const [error,setError] = useState("")

    const submitFunc = (e) =>{
        e.preventDefault();

        if(password === "password" && username === "user"){
            setLogin(true);
        }else{
            setLogin(false);
            setError("Invalid username or password")
        }
    }
    return (
        <>
        <h1>Login Page</h1>
        {login && <p>Welcome, user!</p>}
        {!login && <>
        <p>{error}</p>
        <form onSubmit={submitFunc}>
            <label>Username:</label>
            <input type="text" placeholder="username" required value={username} onChange={e => setUsername(e.target.value)}/>
            <br/>
            <label>Password:</label>
            <input type="password" placeholder="password" required value={password} onChange={e => setPassword(e.target.value)}/>
            <br/>
            <button>Submit</button>
        </form></>}
        
        </>
    )
}

export default Login;