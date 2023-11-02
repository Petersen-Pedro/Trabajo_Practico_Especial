"use strict"
// Expresiones regulares
const expresiones = {
	defaultText: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // email
	contrasenia: /^.{4,12}$/, // 4 a 12 digitos.
}

// Campos del form
const iniciarSesionArr = [
    {
        label: "Usuario", 
        id: "usuario", 
        type: "text", 
        textError: "El usuario debe tener más de 1 digito y solo letras, y espacios"
    },
    {
        label: "Contraseña", 
        id: "contrasenia", 
        type: "password", 
        textError: "La contraseña debe contener de 4 a 12 digitos"
    }
]
const registrarseArr = [
    {
        label: "Nombre", 
        id: "nombre", 
        type: "text", 
        textError: "El nombre debe tener más de 1 digito y solo letras, y espacios"
    },
    {
        label: "Apellido", 
        id: "apellido", 
        type: "text", 
        textError: "El apellido debe tener más de 1 digito y solo letras, y espacios"
    },
    {
        label: "NickName (opcional)", 
        id: "nickname", 
        type: "text"
    },
    {
        label: "Genero", 
        id: "genero", 
        type: "text",
        textError: "El genero debe tener más de 1 digito y solo letras, y espacios"
    },
    {
        label: "Email", 
        id: "email", 
        type: "email",
        textError: 'El email debe incluir un @ y al menos una extensión del tipo ".com" '
    },
    {
        label: "Repetir Email", 
        id: "repEmail", 
        type: "email",
        textError: "Ambos mails deben coincidir"
    },
    {
        label: "Contraseña", 
        id: "contrasenia", 
        type: "password",
        textError: "La contraseña debe contener de 4 a 12 digitos"
    },
    {
        label: "Repetir Contraseña", 
        id: "repContrasenia", 
        type: "password",
        textError: "Ambas contraseñas deben coincidir"
    }
]