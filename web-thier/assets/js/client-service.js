const table = document.querySelector('[data-tabela]')
const newClient = document.createElement('tr')

const clientList = async () => {
    const url = "http://localhost:3000/profile"
    const response = await fetch(url)
    const json = await response.json()
    console.log(json);
        json.forEach(element => {
            table.appendChild(newLine(
                element.nome, element.email, element.id
            ))
        });
        
    }
    
    const remove = async (element) => {
        console.log(element.id);
        return fetch(`http://localhost:3000/profile/${element.id}`, {
          method: 'DELETE'
       })
    } 
    
const newLine = (nome, email, id) => {
    const newClient = document.createElement('tr')
    const content = `
       <td class="td" data-td>${nome}</td>
       <td>${email}</td>
       <td>
          <ul class="tabela__botoes-controle">
             <li><a href="../editar/editar.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
             <li><button class="botao-simples botao-simples--excluir" type="button" id="${id}" onclick="remove(this)">Excluir</button></li>
          </ul>
       </td>`    
    newClient.innerHTML = content
    newClient.dataset.id = id
    return newClient
 }


clientList()
