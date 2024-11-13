function comprobarExistenciaUsuario() {
    let usuarioBuscado = document.forms[0].querySelectorAll("input")[0].value.trim();
    let contrasenaBuscada = document.forms[0].querySelectorAll("input")[1].value.trim();

    let existeUsuario = false;

    listaClientes.forEach(cliente => {
        if (cliente.usuario == usuarioBuscado && cliente.contrasena == contrasenaBuscada) {
            localStorage.setItem("usuarioID", cliente.id);
            existeUsuario = true;
        }
    });

    if (!existeUsuario) {
        [...document.getElementsByClassName("oculto")].setAttribute("class", "visible");
    } else {
        document.forms[0].submit();
    }
}

function validacionNuevoUsuario() {
    let noHayError = true;
    let listaParrafosOcultos = [...document.getElementsByClassName("oculto")];
    let listaParrafosVisibles = [...document.getElementsByClassName("visible")];
    let parrafoError;

    if (document.getElementById("nombre").value.trim() == "") {
        noHayError = false;
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Obligatorio");
        if (parrafoError) {
            parrafoError.setAttribute("class", "visible");
        }
    } else {
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Obligatorio");
        if (!parrafoError) {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "Obligatorio").setAttribute("class", "oculto");
        }
    }

    if (document.getElementById("edad").value < 18) {
        noHayError = false;
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Prohibido menores (+18)");
        if (parrafoError) {
            parrafoError.setAttribute("class", "visible");
        }
    } else {
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Prohibido menores (+18)");
        if (!parrafoError) {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "Prohibido menores (+18)").setAttribute("class", "oculto");
        }
    }

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value))) {
        noHayError = false;
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Formato inválido");
        if (parrafoError) {
            parrafoError.setAttribute("class", "visible");
        }
    } else {
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Formato inválido");
        if (!parrafoError) {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "Formato inválido").setAttribute("class", "oculto");
        }
    }

    if (!(/^[0-9]{9}$/.test(document.getElementById("telefono").value))) {
        noHayError = false;
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Mínimo 9 números");
        if (parrafoError) {
            parrafoError.setAttribute("class", "visible");
        }
    } else {
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Mínimo 9 números");
        if (!parrafoError) {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "Mínimo 9 números").setAttribute("class", "oculto");
        }
    }

    if (document.getElementById("direccion").value == "") {
        noHayError = false;
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Dirección inválida");
        if (parrafoError) {
            parrafoError.setAttribute("class", "visible");
        }
    } else {
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Dirección inválida");
        if (!parrafoError) {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "Dirección inválida").setAttribute("class", "oculto");
        }
    }

    if (!(/^[^\d].*/.test(document.getElementById("usuario").value))) {
        noHayError = false;
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "No puede empezar por un número");
        if (parrafoError) {
            parrafoError.setAttribute("class", "visible");
        }
    } else {
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "No puede empezar por un número");
        if (!parrafoError) {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "No puede empezar por un número").setAttribute("class", "oculto");
        }
    }

    if (!(/^[^\d][\w\W]{4,}$/.test(document.getElementById("contrasena").value))) {
        noHayError = false;
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Mínimo 4 caracteres y no puede empezar por un número");
        if (parrafoError) {
            parrafoError.setAttribute("class", "visible");
        }
    } else {
        parrafoError = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Mínimo 4 caracteres y no puede empezar por un número");
        if (!parrafoError) {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "Mínimo 4 caracteres y no puede empezar por un número").setAttribute("class", "oculto");
        }
    }

    if (noHayError) {
        localStorage.setItem("usuarioID", "creado bien");
        document.forms[0].submit();
    }
}

function crearNuevoUsuario() {
    document.body.innerHTML = "";

    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";
    document.body.appendChild(contenedor);

    let titulo = document.createElement("h1");
    titulo.innerHTML = "¡Bienvenido!";
    contenedor.appendChild(titulo);

    let logo = document.createElement("img");
    logo.src = "../img/favicon.png";
    contenedor.appendChild(logo);

    let formulario = document.createElement("form");
    formulario.action = "inicio.html";
    formulario.method = "get";
    contenedor.appendChild(formulario);

    let labelNombre = document.createElement("label");
    labelNombre.htmlFor = "nombre";
    labelNombre.innerHTML = "Nombre";
    formulario.appendChild(labelNombre);

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    formulario.appendChild(inputNombre);

    let parrafoError = document.createElement("p");
    parrafoError.innerHTML = "Obligatorio";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let labelEdad = document.createElement("label");
    labelEdad.htmlFor = "edad";
    labelEdad.innerHTML = "Edad";
    formulario.appendChild(labelEdad);

    let inputEdad = document.createElement("input");
    inputEdad.type = "number";
    inputEdad.id = "edad";
    formulario.appendChild(inputEdad);

    parrafoError = document.createElement("p");
    parrafoError.innerHTML = "Prohibido menores (+18)";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let labelEmail = document.createElement("label");
    labelEmail.htmlFor = "email";
    labelEmail.innerHTML = "Email";
    formulario.appendChild(labelEmail);

    let inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.id = "email";
    formulario.appendChild(inputEmail);

    parrafoError = document.createElement("p");
    parrafoError.innerHTML = "Formato inválido";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let labelTelefono = document.createElement("label");
    labelTelefono.htmlFor = "telefono";
    labelTelefono.innerHTML = "Teléfono";
    formulario.appendChild(labelTelefono);

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.id = "telefono";
    formulario.appendChild(inputTelefono);

    parrafoError = document.createElement("p");
    parrafoError.innerHTML = "Mínimo 9 números";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let labelDireccion = document.createElement("label");
    labelDireccion.htmlFor = "direccion";
    labelDireccion.innerHTML = "Dirección";
    formulario.appendChild(labelDireccion);

    let inputDireccion = document.createElement("input");
    inputDireccion.type = "text";
    inputDireccion.id = "direccion";
    formulario.appendChild(inputDireccion);

    parrafoError = document.createElement("p");
    parrafoError.innerHTML = "Dirección inválida";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let labelUsuario = document.createElement("label");
    labelUsuario.htmlFor = "usuario";
    labelUsuario.innerHTML = "Usuario";
    formulario.appendChild(labelUsuario);

    let inputUsuario = document.createElement("input");
    inputUsuario.type = "text";
    inputUsuario.id = "usuario";
    formulario.appendChild(inputUsuario);

    parrafoError = document.createElement("p");
    parrafoError.innerHTML = "No puede empezar por un número";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let labelContrasena = document.createElement("label");
    labelContrasena.htmlFor = "contrasena";
    labelContrasena.innerHTML = "Contraseña";
    formulario.appendChild(labelContrasena);

    let inputContrasena = document.createElement("input");
    inputContrasena.type = "password";
    inputContrasena.id = "contrasena";
    formulario.appendChild(inputContrasena);

    parrafoError = document.createElement("p");
    parrafoError.innerHTML = "Mínimo 4 caracteres y no puede empezar por un número";
    parrafoError.className = "oculto";
    formulario.appendChild(parrafoError);

    let botonEntrar = document.createElement("button");
    botonEntrar.type = "button";
    botonEntrar.innerHTML = "Crear";
    botonEntrar.addEventListener("click", validacionNuevoUsuario);
    formulario.appendChild(botonEntrar);

    let parrafoNoRegistrado = document.createElement("p");
    parrafoNoRegistrado.innerHTML = "¿Tienes cuenta? Inicia sesión ";
    formulario.appendChild(parrafoNoRegistrado);

    let enlaceNuevoRegistro = document.createElement("a");
    enlaceNuevoRegistro.href = "#";
    enlaceNuevoRegistro.innerHTML = "aquí";
    enlaceNuevoRegistro.addEventListener("click", cargarFormulario);
    parrafoNoRegistrado.appendChild(enlaceNuevoRegistro);
}

function cargarFormulario() {
    document.body.innerHTML = "";

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
    formulario.method = "get";
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
    botonEntrar.addEventListener("click", comprobarExistenciaUsuario);
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

onload = async () => {
    localStorage.clear();
    cargarFormulario();
    await cargarDatos();
    tienda = new Tienda(listaClientes, listaProductos, listaCompras);
    console.log(tienda);
}