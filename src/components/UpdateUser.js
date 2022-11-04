import React from 'react'
import {useState} from 'react'
import { updateUser } from '../utils/Index'

const UpdateUser = ({user}) => {
    console.log(user)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const updateUsername = async (event) => {
        event.preventDefault()
        console.log(username)
        await updateUser(user, "username", username)
    }

    const updateEmail = async (event) => {
        event.preventDefault()
        console.log(email)
        await updateUser(user, "email", email)
    }

    const updatePassword = async (event) => {
        event.preventDefault()
        console.log(password)
        await updateUser(user, "password", password)
    }


    return (
        <>
            <form onSubmit={updateUsername}>
                <label>Update your username
                    <input onChange={(event) => setUsername(event.target.value)} />
                </label>
                <button type='submit'>Update your username</button>
            </form>

            <form onSubmit={updateEmail}>
                <label>Update your Email
                    <input onChange={(event) => setEmail(event.target.value)} />
                </label>
                <button type='submit'>Update your email</button>
            </form>

            <form onSubmit={updatePassword}>
                <label>Update your password
                    <input onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button type='submit'>Update your password</button>
            </form>
        
        </>
    )

}

export default UpdateUser;
