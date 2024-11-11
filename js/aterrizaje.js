function cargarUsuarios() {
    let listaUsuarios = [];
    listaUsuarios.push({
        "id": 1,
        "nombre": "Juan",
        "apellidos": "Pérez",
        "email": "juan1@gmail.com",
        "telefono": 123456789,
        "direccion": "Calle Falsa 12 1A",
        "usuario": "juanito1",
        "contrasena": "clave1"
    });
    listaUsuarios.push({
        "id": 2,
        "nombre": "Juan",
        "apellidos": "Pérez",
        "email": "juan1@gmail.com",
        "telefono": 123456789,
        "direccion": "Calle Falsa 12 1A",
        "fechaDeRegistro": "2023-01-01",
        "usuario": "juanito2",
        "contrasena": "clave2"
    });
    listaUsuarios.push({
        "id": 3,
        "nombre": "Juan",
        "apellidos": "Pérez",
        "email": "juan1@gmail.com",
        "telefono": 123456789,
        "direccion": "Calle Falsa 12 1A",
        "fechaDeRegistro": "2023-01-01",
        "usuario": "juanito3",
        "contrasena": "clave3"
    });
    listaUsuarios.push({
        "id": 4,
        "nombre": "Juan",
        "apellidos": "Pérez",
        "email": "juan1@gmail.com",
        "telefono": 123456789,
        "direccion": "Calle Falsa 12 1A",
        "fechaDeRegistro": "2023-01-01",
        "usuario": "juanito4",
        "contrasena": "clave4"
    });
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
}

function comprobarFormulario() {
    let usuarioBuscado = document.forms[0].querySelectorAll("input")[0].value.trim();
    let contrasenaBuscada = document.forms[0].querySelectorAll("input")[1].value.trim();

    let existeUsuario = false;
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

    listaUsuarios.forEach(usuario => {
        if (usuario.usuario == usuarioBuscado && usuario.contrasena == contrasenaBuscada) {
            localStorage.setItem("usuarioActual", usuarioBuscado);
            existeUsuario = true;
        }
    });

    if (existeUsuario) {
        document.forms[0].submit();
    } else {
        document.getElementsByClassName("oculto")[0].setAttribute("class", "visible");
    }
}

function crearNuevoUsuario() {
    document.body.innerHTML = "nuevo usuario";
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

    let parrafoError = document.createElement("p");
    parrafoError.innerHTML = "Error, usuario y/o contraseña no válidos";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let botonEntrar = document.createElement("button");
    botonEntrar.type = "button";
    botonEntrar.innerHTML = "Acceder";
    botonEntrar.addEventListener("click", comprobarFormulario);
    formulario.appendChild(botonEntrar);

    let parrafoNoRegistrado = document.createElement("p");
    parrafoNoRegistrado.innerHTML = "¿No estás registrado? ";
    formulario.appendChild(parrafoNoRegistrado);

    let enlaceNuevoRegistro = document.createElement("a");
    enlaceNuevoRegistro.href = "#";
    enlaceNuevoRegistro.innerHTML = "Regístrate aquí";
    enlaceNuevoRegistro.addEventListener("click", crearNuevoUsuario);
    parrafoNoRegistrado.appendChild(enlaceNuevoRegistro);
}

onload = () => {
    localStorage.clear();
    cargarUsuarios();
    cargarFormulario();
}