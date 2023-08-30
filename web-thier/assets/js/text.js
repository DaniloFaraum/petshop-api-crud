const url = "https://dummyapi.net/v1/"

const jsondomeiaum = {
    nome : "Thier Anarcon",
    email : "thierzinhodamassa@gmail.com",
    id: 1 
}

const post = async (json) => {
    const res = await fetch(`${url}post`, {
        method : "POST",
        headers: { "Content-type" : "application/json" },
        body : JSON.stringify(json)
    })

    return res.status
}

const put = async (json, id) => {
    const res = await fetch(`${url}put/${id}`, {
        method : "PUT",
        headers: { "Content-type" : "application/json" },
        body : JSON.stringify(json)
    })

    return res.status
}

const main = async () => {
    jsondomeiaum.macaco = "teste"
    await put(jsondomeiaum, jsondomeiaum.id)

    await post({
        nome : "Danilo Faraum",
        email: "danilobesta@gmail.com",
        id : 2
    })
}

