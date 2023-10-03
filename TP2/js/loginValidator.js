"use strict"

const inputsContainer = document.querySelectorAll(".login_form-input");

const expresiones = {
	defaultText: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nickName: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo;"
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	contrasenia: /^.{4,12}$/, // 4 a 12 digitos.
}

const camposRegistro = {
    nombre: false,
    apellido: false,
    nickName: false,
    contrasenia: false,
    repContrasenia: false,
    genero: false,
    email: false,
    repEmail: false,
}
const camposInicioSesion = {
    usuario: false, contrasenia: false,
}

inputsContainer.forEach((input) => {
    input.addEventListener("keyup", validarInput);
});

submitBtn.addEventListener("click", validarForm);

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