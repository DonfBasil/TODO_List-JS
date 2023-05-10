const button = document.querySelector('.button-task');
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeTarefa = [];

 

function adicionarNovaTarefa(){
    minhaListaDeTarefa.push({
        tarefa: input.value,
        concluida: false
    });
    input.value = '';
    mostrarTarefas();
}

function mostrarTarefas(){
    let novaLi = '';
    minhaListaDeTarefa.forEach((item, index) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
        <img  src="./img/check-icon.png" alt="chack-icon" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./img/apagar-icon.png" alt="apagar-icon" onclick="deletarItem(${index})">
        </li>
        `
    })
    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeTarefa))
   
}

function concluirTarefa(index){
    minhaListaDeTarefa[index].concluida = !minhaListaDeTarefa[index].concluida
    mostrarTarefas();
}

function deletarItem(index){
    minhaListaDeTarefa.splice(index, 1)
    mostrarTarefas();
}

function recarregarTarefas(){
    const tarefasDoStorege = localStorage.getItem('lista')

    if(tarefasDoStorege){
    minhaListaDeTarefa = JSON.parse(tarefasDoStorege)
    }
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)




