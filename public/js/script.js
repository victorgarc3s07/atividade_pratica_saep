//---------- função para modal ------------
const buttonLogin = document.querySelector("#login");
const modal = document.querySelector("dialog");
const buttonFechar = document.querySelector("#close-modal");

buttonLogin.onclick = function() {
    modal.showModal();
}
buttonFechar.onclick = function() {
    modal.close();
}

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});













