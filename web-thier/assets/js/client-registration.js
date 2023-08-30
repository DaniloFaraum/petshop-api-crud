const url = "http://localhost:3000/profile"

const getInfo = async () =>{
    const name = document.getElementById("nameInput").value
    const email = document.getElementById("emailInput").value
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const jsonId = jsonResponse[Object.keys(jsonResponse).sort().pop()].id+1
    const json = {
        nome: name,
        email: email,
        id: jsonId
    }
    return json
}

const post = async () =>{
    const name = document.getElementById("nameInput").value
    const email = document.getElementById("emailInput").value
    if (name !== "" && email !== "") {
    const json = await getInfo()
       const res = await fetch(`${url}`, {
            method : "POST",
            headers: { "Content-type" : "application/json" },
            body : JSON.stringify(json)
        })
    window.location.href = "../editar/editar.html"
    }
}
