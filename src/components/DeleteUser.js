import React from 'react'

import { deleteUser } from '../utils/Index'

const DeleteUser = ({user}) => {
    const deleteFunc = async (event) => {
        event.preventDefault()
        await deleteUser(user)
    }

    return ( 

        <form onSubmit = {deleteFunc}>
            <button type="submit">Delete your account</button>
        </form>
    )
}


export default DeleteUser;
