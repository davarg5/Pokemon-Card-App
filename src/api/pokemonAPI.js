const BASE_URL = "http://localhost:8000/api/"

function defaultGetInit(token) {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/JSON",
            "Authorization": `JWT ${token}`
        }
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


async function fetchCard(cardId, token) {
    return await tryCatchFetch(BASE_URL + `cards/${cardId}/`, defaultGetInit(token))
}

export default {
    login,
    signUp,
    fetchCard
} 