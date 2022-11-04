import React from "react";
import { useState } from "react";
import { loginUser } from "../utils/Index";

const LoginUser = ({setter}) =>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const submitHandler = async (event) =>{
        event.preventDefault()
        await loginUser(username, password, setter)
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Username<br/>
                <input onChange={(event)=> setUsername(event.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>Password<br/>
                <input type="password" onChange={(event)=> setPassword(event.target.value)}/>
            </label>
            <br/>
            <br/>
            <button type="submit">Click here to login</button>
        </form>
    )
}

export default LoginUser;
