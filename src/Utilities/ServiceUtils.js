const CreateRequest = (reqType)=>{
    // const bearerKey = localStorage.getItem("token");
    return {
        method: reqType,
        headers: {
            'Content-Type': 'application/json'//,
            // 'Authorization': 'bearer ' + bearerKey
        }
    }
}

export const fetchGet = (url) => {
    return fetch(url,CreateRequest('GET'))
}

export const fetchPost = (url, param) => {
    const request =  {...CreateRequest('POST'), body : JSON.stringify(param)}
    return fetch(url, request)
}

export const fetchDel = (url) => {
    return fetch(url,CreateRequest('DELETE'))
}

export const fetchPut = (url, param) => {
    const request =  {...CreateRequest('PUT'), body : JSON.stringify(param)}
    return fetch(url, request)
}