const pagina = document;
const botonMenu = pagina.querySelector(".bx-menu-alt-left");
const menu = pagina.querySelector(".navbar__div--ul");


function cerrarMenu() {
    menu.classList.toggle("hidden");
}

botonMenu.addEventListener("click", cerrarMenu );

cerrarMenu()


export default cerrarMenu;