import { writeCookie } from "../common/index"

export const loginUser = async (username, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)
        writeCookie("jwt_token", data.token, 7 )
    } catch (error) {
        console.log(error)
    }
}


export const regUser = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}createUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email" : email,
                "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)
    } catch (error) {
        console.log(error)
    }
}

export const readUsers = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}readUser`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json()
        //console.log(data.user)
        const usernames = data.user.map(users => users.username)
        //console.log(usernames)
        return usernames
    } catch (error) {
        console.log(error)
    }
}
//TODO: add delete and update fetch requests

export const updateUser = async (username, key, value ) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}updateUser`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
               "username" : username,
               "key": key,
               "value": value
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}deleteUser`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username
            })
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

export const findUser = async (cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookie}`
            },
        })
        const data = await response.json()
        return data.username
    } catch (error) {
        console.log(error)
    }
}
