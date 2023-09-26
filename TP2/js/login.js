"use strict"

const loginIniciarSesion = document.querySelector("#form_iniciar-sesion");
const loginRegistrarse = document.querySelector("#form_registrarse");
const sinCuentaBtn = document.querySelector("#sin-cuenta_btn");
const yaCuentaBtn = document.querySelector("#login_ya-cuenta-btn");
const captchaBtn = document.querySelector("#login_captcha_cuadrado");
const recaptcha = document.querySelector("#recaptcha_btn");
const palomita = document.createElement("img");

sinCuentaBtn.addEventListener("click", () => {
    loginIniciarSesion.classList.add("hidden");
    loginRegistrarse.classList.remove("hidden");
});
yaCuentaBtn.addEventListener("click", () => {
    loginRegistrarse.classList.add("hidden");
    loginIniciarSesion.classList.remove("hidden");
});
captchaBtn.addEventListener("click", () => {
    palomita.classList.add("palomita_ok");
    palomita.src = "images/logo/palomita_ok.png";
    palomita.alt = "palomita";
    captchaBtn.replaceWith(palomita);
});
recaptcha.addEventListener("click", () => {
    palomita.replaceWith(captchaBtn);
});