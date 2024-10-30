// Variáveis
const tarefaInput = document.getElementbyld("tarefa");
const adicionarBotao = document.getElementByld("adicionar");
const listaTarefa = document.getElementByld("tarefas");

// Event Listeners
adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});

// Funções
function adicionarTarefa() {
    const tarefatexto = tarefaInput.value;
    if (tarefatexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
        ${tarefaTexto}<button class="excluir">Excluir</button>`;
        listaTarefa.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
}

listaTarefa.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
    }
});