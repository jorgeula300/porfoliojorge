const formulario = document.querySelector(".form--contact")
const nombre = document.querySelector("#nombre")
const numero = document.querySelector("#numero")
const email = document.querySelector("#email")

const mensaje = document.querySelector("#mensaje")

const modal = document.querySelector(".modal")

function openModal() {

    alert('Se envio el mensaje');
}

function closeModal() {
    modal.classList.remove("modal--open")
}


function sendEmail(e) {
    e?.preventDefault();
    const params = {
        nombre: nombre.value,
        numero: numero.value,
        email: email.value,
        mensaje: mensaje.value
    }

    if (params.name && params.email && params.numero && params.mensaje) {

        emailjs.send("service_e38ygm9", "template_yhgchas", params, then(openModal));

    }

}
formulario.addEventListener("submit", sendEmail)

export default sendEmail;


