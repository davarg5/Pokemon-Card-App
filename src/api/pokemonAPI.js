import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/";

function defaultGetInit(token) {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/JSON",
            "Authorization": `JWT ${token}`
        }
    }
}

function defaultPostInit(card, token) {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
            "Authorization": `JWT ${token}`
        },
        body: JSON.stringify(card)
    }
}

function defaultDeleteInit(token) {
    return {
        method: "DELETE",
        headers: {
            "Content-Type": "application/JSON",
            "Authorization": `JWT ${token}`
        },
    }
}

async function tryCatchFetch(url, init) {
    try {
        let response = await fetch(url, init)            
        let data = await response.json()

        if (!response.ok) {
            let error = {
                status: response.status,
                statusText: response.statusText,
                message: data
            }
            throw(error)
        }

        return data
    }
    catch (error) {
        console.error(error)
        return null
    }
}

async function login(credentials) {
    let init = {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(credentials)
    }
    let url = BASE_URL + "login/"

    return await tryCatchFetch(url, init)
}

async function signUp(credentials) {
    let init = {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(credentials)
    }
    let url = BASE_URL + "users/"

    return await tryCatchFetch(url, init)
}

async function fetchUser(userId) {
    let res = await fetch(BASE_URL + `users/${userId}`);
    let data = await res.json()
    return data
}


async function fetchCard(cardId, token) {
    return await tryCatchFetch(BASE_URL + `cards/${cardId}/`, defaultGetInit(token))
}

async function addCard(card, token) {
    return await tryCatchFetch(BASE_URL + `cards/`, defaultPostInit(card, token))
}

async function deleteCard(cardId, token) {
    return await fetch(BASE_URL + `cards/${cardId}`, defaultDeleteInit(token))
}

export default {
    login,
    signUp,
    fetchUser,
    fetchCard,
    addCard,
    deleteCard
} 