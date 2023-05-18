const BASE_URL = "http://localhost:4000";

// TO START JSON SERVER --> json-server --watch ./data/db.json --port 4000

export function getTodo() {
    return fetch(`${BASE_URL}/todos`)
            .then(data => data.json())
            .catch(() => console.log("getTodo not success"))
}

export function addTodo(obj) {
    return fetch(`${BASE_URL}/todos`, {
        method : "POST",
        headers : { "content-type" : "application/json",
                    "accept" : "application/json" },
        body : JSON.stringify(obj)

    })
    .then(data => data.json())
    .catch(() => console.log("addTodo not success"))
}

export function updateTodo(obj) {
    return fetch(`${BASE_URL}/todos/${obj.id}`, {
        method : "PATCH",
        headers : { "content-type" : "application/json",
                    "accept" : "application/json" },
        body : JSON.stringify({
            description : obj.description
        })

    })
    .then(data => data.json())
    .catch(() => console.log("updateTodo not success"))
}

export function deleteTodo(id) {
    return fetch(`${BASE_URL}/todos/${id}`, {
        method : "DELETE",
    })
    .catch(() => console.log("deleteTodo not success"))
}