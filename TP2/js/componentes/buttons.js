function crearYaCuentaBtn(){
    const yaCuentaBtn = document.createElement("button");
    yaCuentaBtn.classList.add("login_cambiar-form_btn");
    yaCuentaBtn.classList.add("button-terciary");
    yaCuentaBtn.setAttribute("id", "ya-cuenta-btn");
    const spanElement = document.createElement("span");
    spanElement.textContent = "¿Ya tienes cuenta?";
    yaCuentaBtn.appendChild(spanElement);
    return yaCuentaBtn;
}