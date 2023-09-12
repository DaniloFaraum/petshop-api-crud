const url = "http://localhost:3000/profile"

const getInfo = async () =>{
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const json = {
        nome: document.getElementById("nameInput").value,
        email: document.getElementById("emailInput").value,
        id: jsonResponse[Object.keys(jsonResponse).sort().pop()].id+1
    }
    return json
}

const post = async () =>{
    const name = document.getElementById("nameInput").value
    const email = document.getElementById("emailInput").value
    if (name !== "" && email !== "") {
    const json = await getInfo()
    await console.log(json);
       const res = await fetch(`${url}`, {
            method : "POST",
            headers: { "Content-type" : "application/json" },
            body : JSON.stringify(json)
        })
    window.location.href = "../lista-clientes/lista-clientes.html"
    }
}

