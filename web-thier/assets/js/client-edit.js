const put = async () => {
    const name = document.getElementById("nameInput").value
    const email = document.getElementById("emailInput").value
    if (name !== "" && email !== "") {
        const res = await fetch(`http://localhost:3000/profile/${new URL(window.location).searchParams.get('id')}`, {
        method : "PATCH",
        headers: { "Content-type" : "application/json" },
        body : JSON.stringify({
            nome: name,
            email: email
        })
    })
     window.location.href = "../lista-clientes/lista-clientes.html"
}
}
