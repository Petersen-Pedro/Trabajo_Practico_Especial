"use strict"

// Selectores generales
const form = document.querySelector("#mainForm");
const sinCuentaBtn = document.querySelector("#sin-cuenta_btn");
const captchaBtn = document.querySelector("#login_captcha_cuadrado");
const recaptcha = document.querySelector("#recaptcha_btn");
// Button de "¿ya tienes cuenta?"
const yaCuentaBtn = document.createElement("button");
yaCuentaBtn.classList.add("login_sin-cuenta_btn");
const spanElement = document.createElement("span");
spanElement.textContent = "¿Ya tienes cuenta?";
yaCuentaBtn.appendChild(spanElement);
yaCuentaBtn.setAttribute("id", "ya-cuenta-btn");
// H2 de "registrarse"
const iniciarSesionTitulo = document.querySelector("#login_form-titulo");
const registrarseTitulo = document.createElement("h2");
registrarseTitulo.textContent = "Registrarse";
// Palomita
const palomita = document.createElement("img");
palomita.classList.add("palomita_ok");
palomita.src = "images/logo/palomita_ok.png";
palomita.alt = "palomita";

// Arrays con labels-inputs
const iniciarSesionArr = [
    {
        label: "Usuario o Mail", id: "usuario", type: "text"
    },
    {
        label: "Contraseña", id: "contrasenia", type: "password"
    }
]
const registrarseArr = [
    {
        label: "Nombre", id: "nombre", type: "text"
    },
    {
        label: "Apellido", id: "apellido", type: "text"
    },
    {
        label: "NickName (opcional)", id: "nickname", type: "text"
    },
    {
        label: "Genero", id: "genero", type: "text"
    },
    {
        label: "Email", id: "email", type: "email"
    },
    {
        label: "Repetir Email", id: "repEmail", type: "email"
    },
    {
        label: "Contraseña", id: "contrasenia", type: "password"
    },
    {
        label: "Repetir Contraseña", id: "repContrasenia", type: "password"
    }
]
// Carga de labels-inputs
const loadInputs = (array) => {
    for(const elem of array){
        form.innerHTML += 
        `                
            <div class="login_form-input--container">
                <label for="${elem.id}">${elem.label}</label>
                <input type="${elem.type}" name="${elem.id}" id="${elem.id}">
            </div>
        `
    }
}
// Funciones de reemplazo
sinCuentaBtn.addEventListener("click", () => {
    form.innerHTML = "";
    loadInputs(registrarseArr);
    iniciarSesionTitulo.replaceWith(registrarseTitulo);
    sinCuentaBtn.replaceWith(yaCuentaBtn);
});
yaCuentaBtn.addEventListener("click", () => {
    form.innerHTML = "";
    loadInputs(iniciarSesionArr);
    registrarseTitulo.replaceWith(iniciarSesionTitulo);
    yaCuentaBtn.replaceWith(sinCuentaBtn);
});
captchaBtn.addEventListener("click", () => {
    captchaBtn.replaceWith(palomita);
});
recaptcha.addEventListener("click", () => {
    palomita.replaceWith(captchaBtn);
});