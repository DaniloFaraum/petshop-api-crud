const table = document.querySelector('[data-tabela]')

const clientList = async () => {
    const url = "http://localhost:3000/profile"
    const response = await fetch(url)
    const json = await response.json()
    console.log(json);
        json.forEach(element => {
            table.appendChild(newLine(
                element.nome, element.email
            ))
        });
    }

const newLine = (nome, email) => {
    const newClient = document.createElement('tr')
    const content = `
       <td class="td" data-td>${nome}</td>
       <td>${email}</td>
       <td>
          <ul class="tabela__botoes-controle">
             <li><a href="../editar/editar.html" class="botao-simples botao-simples--editar">Editar</a></li>
             <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
          </ul>
       </td>`    
    newClient.innerHTML = content
    return newClient
 }

clientList()
 

