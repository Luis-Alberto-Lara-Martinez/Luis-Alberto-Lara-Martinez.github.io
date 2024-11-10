let listaUsuarios = [];

async function cargarUsuarios() {
    let ruta = await fetch("../json/usuarios.json");
    listaUsuarios = await ruta.json();
}

onload = () => {
    cargarUsuarios();
    cargarFormulario();
}
function comprobarFormulario() {
    let nombre = document.forms[0].querySelectorAll("input")[0].value.trim();
    if (nombre == "") {
        nombre.insertAdjacentElement("beforeend", "<p>Hola mundo</p>");
    };
}

function cargarFormulario() {
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";
    document.body.appendChild(contenedor);

    let titulo = document.createElement("h1");
    titulo.innerHTML = "Iniciar sesión";
    contenedor.appendChild(titulo);

    let logo = document.createElement("img");
    logo.src = "../img/favicon.png";
    contenedor.appendChild(logo);

    let formulario = document.createElement("form");
    formulario.action = "inicio.html";
    formulario.method = "post";
    contenedor.appendChild(formulario);

    let labelNombre = document.createElement("label");
    labelNombre.htmlFor = "usuario";
    labelNombre.innerHTML = "Usuario";
    formulario.appendChild(labelNombre);

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "usuario";
    formulario.appendChild(inputNombre);

    let labelContrasena = document.createElement("label");
    labelContrasena.htmlFor = "contrasena";
    labelContrasena.innerHTML = "Contraseña";
    formulario.appendChild(labelContrasena);

    let inputContrasena = document.createElement("input");
    inputContrasena.type = "password";
    inputContrasena.id = "contrasena";
    formulario.appendChild(inputContrasena);

    let botonEntrar = document.createElement("button");
    botonEntrar.type = "button";
    botonEntrar.innerHTML = "Acceder";
    botonEntrar.addEventListener("click", comprobarFormulario);
    formulario.appendChild(botonEntrar);
}