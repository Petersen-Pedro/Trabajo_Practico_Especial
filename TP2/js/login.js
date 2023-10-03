"use strict"

// Selectores generales
const inputsContainer = document.querySelectorAll(".login_form-input");

const form = document.querySelector("#mainForm");
const tituloForm = document.querySelector("#login_form-titulo");
const sinCuentaBtn = document.querySelector("#sin-cuenta_btn");
const captchaInput = document.querySelector("#login_captcha_cuadrado");
const recaptcha = document.querySelector("#recaptcha_btn");
const submitBtn = document.querySelector("#submitBtn");

const yaCuentaBtn = crearYaCuentaBtn();

const expresiones = {
	defaultText: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nickName: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo;"
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	contrasenia: /^.{4,12}$/, // 4 a 12 digitos.
}
const camposInicioSesion = {
    usuario: false, contrasenia: false,
}

inputsContainer.forEach((input) => {
    input.addEventListener("keyup", validarInput);
});

submitBtn.addEventListener("click", validarForm);

// Funciones de reemplazo
sinCuentaBtn.addEventListener("click", () => {
    loadInputs(registrarseArr);
    tituloForm.textContent = "Registrarse";
    submitBtn.textContent = "Registrarse";
    sinCuentaBtn.replaceWith(yaCuentaBtn);
});
yaCuentaBtn.addEventListener("click", () => {
    loadInputs(iniciarSesionArr);
    tituloForm.textContent = "Iniciar Sesion";
    submitBtn.textContent = "Iniciar Sesion";
    yaCuentaBtn.replaceWith(sinCuentaBtn);
});
recaptcha.addEventListener("click", () => {
    captchaInput.checked &&= false;
});

// Carga de labels-inputs
function loadInputs(array){
    form.innerHTML = "";
    for (const elem of array) {
        form.innerHTML += `
        <section class="login_form-input--container" id="login_form_${elem.id}--container">
            <label for="${elem.id}">${elem.label}</label>
            <input type="${elem.type}" name="${elem.id}" id="${elem.id}" class="login_form-input">
            <img src="#" alt="validator" 
                class="login_form-input_img hidden" id="login_form-input--validator">
        </section>
        `
        const inputsNew = document.querySelectorAll(".login_form-input");
        inputsNew.forEach(input => input.addEventListener("keyup", validarInput));
    }
    // while (form.firstChild) {
    //     form.removeChild(form.firstChild);
    // }
    // for(const elem of array){
    //     const section = document.createElement("section");
    //     const label = document.createElement("label");
    //     const input = document.createElement("input");
    //     const img = document.createElement("img");

    //     section.classList.add("login_form-input--container");
    //     section.id = `login_form_${elem.id}-container`;

    //     label.setAttribute("for", elem.id);
    //     label.textContent = elem.label;

    //     input.type = elem.type;
    //     input.name = elem.id;
    //     input.id = elem.id;
    //     input.classList.add("login_form-input");

    //     img.src = "#";
    //     img.classList.add("login_form-input_img");
    //     img.classList.add("hidden");
    //     img.id = "login_form-input--validator";

    //     input.addEventListener("keyup", validarInput);

    //     section.appendChild(label);
    //     section.appendChild(input);
    //     section.appendChild(img);
    //     form.appendChild(section);
    // }
}

function validarInput(e){
    const inputNombre = e.target.name;
    const inputValor = e.target.value;
    let expresion; 

    switch (inputNombre) {
        case "nickName":
            expresion = expresiones.nickName;
            break;
        case "email":
            expresion = expresiones.email;
            break;
        case "contrasenia":
            expresion = expresiones.contrasenia;
            break;
    
        default:
            expresion = expresiones.defaultText;
            break;
    }
    validarCampo(inputNombre, inputValor, expresion)
}

function validarCampo(inputNombre, inputValor, expresion){
    // const grupoInput = document.querySelector(`#login_form_${inputNombre}-container`);
    const input = document.querySelector(`#${inputNombre}`);
    const validator = document.querySelector(`#login_form_${inputNombre}--container .login_form-input_img`);

    if (expresion.test(inputValor)) {
        input.classList.remove("error");
        input.classList.add("ok");
        validator.src = "images/validator/ok-circle.png";
        camposInicioSesion[inputNombre] = true;
        verificarSubmit();
    }else{
        input.classList.remove("ok");
        input.classList.add("error");
        validator.src = "images/validator/error.png";
        camposInicioSesion[inputNombre] = false;
    }
    validator.classList.remove("hidden");
}

function verificarSubmit(){
    const validaciones = camposInicioSesion.usuario && camposInicioSesion.contrasenia;
    submitBtn.disabled = !validaciones;
}

function validarForm(){
    if (camposInicioSesion.usuario && camposInicioSesion.contrasenia) {
        window.open("index.html");
        // window.location.replace("index.html");
    }
}