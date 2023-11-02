"use strict"

// Selectores generales
const inputs = document.querySelectorAll(".login_form-input");

const form = document.querySelector("#mainForm");
const tituloForm = document.querySelector("#login_form-titulo");
const sinCuentaBtn = document.querySelector("#sin-cuenta_btn");
const captchaInput = document.querySelector("#login_captcha_cuadrado");
const recaptcha = document.querySelector("#recaptcha_btn");
const captchaError = document.querySelector("#captcha_texto-error");
const submitBtn = document.querySelector("#submitBtn");
const logContainer = document.querySelector("#login_form_container");
const loading = document.querySelector("#loading");
const underline = document.querySelector("#loading_underline");

const yaCuentaBtn = crearYaCuentaBtn();

const camposRegistro = {
    nombre: false,
    apellido: false,
    contrasenia: false,
    repContrasenia: false,
    email: false,
    repEmail: false,
}
const camposInicioSesion = {
    usuario: false, contrasenia: false,
}

let camposARevisar = camposInicioSesion;
let arrayInputs = iniciarSesionArr;

inputs.forEach((input) => {
    input.addEventListener("keyup", validarCampo);
});

submitBtn.addEventListener("click", validarForm);

// Funciones de reemplazo
sinCuentaBtn.addEventListener("click", () => {
    camposARevisar = camposRegistro;
    arrayInputs = registrarseArr;
    logContainer.classList.add("registrarse");
    loadInputs();
    tituloForm.textContent = "Registrarse";
    submitBtn.textContent = "Registrarse";
    sinCuentaBtn.replaceWith(yaCuentaBtn);
});
yaCuentaBtn.addEventListener("click", () => {
    camposARevisar = camposInicioSesion;
    arrayInputs = iniciarSesionArr;
    logContainer.classList.remove("registrarse");
    loadInputs();
    tituloForm.textContent = "Iniciar Sesion";
    submitBtn.textContent = "Iniciar Sesion";
    yaCuentaBtn.replaceWith(sinCuentaBtn);
});
recaptcha.addEventListener("click", () => {
    captchaInput.checked &&= false;
});
captchaInput.addEventListener("click", () => {
    if (captchaInput.checked) {
        captchaError.classList.add("hidden");
    }else{
        captchaError.classList.remove("hidden");
    }
})

// Carga de labels-inputs
function loadInputs(){
    form.innerHTML = "";
    for (const elem of arrayInputs) {
        if (elem.id === "genero") {
            form.innerHTML += `
            <section class="login_form-input--container" id="login_form_${elem.id}--container">
                <label for="${elem.id}">${elem.label}</label>
                <select class="login_form-select" name="${elem.id}" id="${elem.id}">
                    <option value="masc">másculino</option>
                    <option value="fem">femenino</option>
                    <option value="otr">otro</option>
                </select>
            </section>
            `
        }else{
            form.innerHTML += `
            <section class="login_form-input--container" id="login_form_${elem.id}--container">
                <label for="${elem.id}">${elem.label}</label>
                <input type="${elem.type}" name="${elem.id}" id="${elem.id}" class="login_form-input">
                <p class="form_input-error hidden">
                    ${elem.textError}
                </p>
            </section>
            `
        }
    }
    const inputsNew = document.querySelectorAll(".login_form-input");
    inputsNew.forEach(input => input.addEventListener("keyup", validarCampo));
}

// Validaciones
function validarCampo(e){
    const input = e.target;
    const inputNombre = input.name;
    const hermano = input.nextElementSibling;

    if (verificarExpresion(input)) {
        input.classList.remove("error");
        input.classList.add("ok");
        hermano.classList.add("hidden");
        camposARevisar[inputNombre] = true;
    }else{
        input.classList.remove("ok");
        input.classList.add("error");
        hermano.classList.remove("hidden");
        camposARevisar[inputNombre] = false;
    }
}

function verificarExpresion(input){
    const inputNombre = input.name;
    const inputValor = input.value;

    switch (inputNombre) {
        case "nickname":
            return true;
        case "email":
            return expresiones.email.test(inputValor);
        case "repEmail":
            return validarEmailRep();
        case "email":
            return expresiones.email.test(inputValor);
        case "contrasenia":
            return expresiones.contrasenia.test(inputValor);
        case "repContrasenia":
            return validarPasswordRep();
        default:
            return expresiones.defaultText.test(inputValor);
    }
}

function validarForm(){
    if (captchaInput.checked) {
        if (checkIputs()) {
            let contador = 0;
            logContainer.classList.add("hidden");
            loading.classList.remove("hidden");
            const duracionAnimacion = 5000;
            const incrementoPorIteracion = 100 / (duracionAnimacion / 50);
            
            const intervalo = setInterval(() => {
                contador += incrementoPorIteracion;
                if (contador <= 100) {
                    underline.style.width = contador + "%";
                    underline.textContent = contador + "%";
                } else {
                    clearInterval(intervalo);
                    window.location.replace("home.html"); 
                }
            }, 40); 
        }
    }else{
        captchaError.classList.remove("hidden");
    }
}
function validarPasswordRep(){
    const password = document.querySelector("#contrasenia");
    const rep = document.querySelector("#repContrasenia");
    return password.value === rep.value;
}
function validarEmailRep(){
    const email = document.querySelector("#email");
    const rep = document.querySelector("#repEmail");
    return email.value === rep.value;
}
function checkIputs(){
    let valores = Object.values(camposARevisar);
    for(let i=0; i< valores.length; i++){
        if (!valores[i]) return false;
    }
    return true;
}