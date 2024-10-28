//-----------------------------------
//------função de abrir e fechar modal---------------

function abrirModal() {
    document.querySelector('#modal').style.display = 'block';
}

function fecharModal() {
    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
}

addEventListener('click', abrirModal);
addEventListener('click', fecharModal);














