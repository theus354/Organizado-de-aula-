// Função para exibir as aulas na página inicial
function exibirAulas() {
    const aulas = JSON.parse(localStorage.getItem('aulas')) || [];
    const aulasList = document.getElementById('aulas-list');
    aulasList.innerHTML = '';

    aulas.forEach((aula, index) => {
        const aulaItem = document.createElement('div');
        aulaItem.classList.add('aula-item');
        aulaItem.innerHTML = `
            <p><strong>${aula.nome}</strong></p>
            <p>Data: ${aula.data}</p>
            <p>Hora: ${aula.hora}</p>
            <a href="editar.html?id=${index}"><i class="fas fa-edit"></i> Editar</a>
            <button class="delete" onclick="excluirAula(${index})"><i class="fas fa-trash-alt"></i> Excluir</button>
        `;
        aulasList.appendChild(aulaItem);
    });
}