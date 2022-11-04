import React from "react";
import {useState} from "react"
import {regUser} from "../utils/Index"

const Register = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await regUser(username, email, password, setter) 
    }
    
    return(
        <form onSubmit = {submitHandler}>
            <label>Username<br/>
                <input onChange={(event) => setUsername(event.target.value)} />          
            </label><br></br>
            <label>Email <br/>
                <input onChange={(event) => setEmail(event.target.value)} />          
            </label><br></br>
            <label>Password <br/>
                <input onChange={(event) => setPassword(event.target.value)} />          
            </label><br></br>
            <button type="submit">Click Here To Register!</button>
        </form>
    )
}

export default Register;