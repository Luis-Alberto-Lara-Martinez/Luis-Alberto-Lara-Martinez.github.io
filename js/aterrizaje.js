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
    let hayError = false;
    let listaParrafosOcultos = [...document.getElementsByClassName("oculto")];
    let listaParrafosVisibles = [...document.getElementsByClassName("visible")];

    if (document.getElementById("nombre").value.trim() == "") {
        let errorNombre = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == "Obligatorio");
        if (errorNombre) {
            errorNombre.setAttribute("class", "visible");
        } else {
            listaParrafosVisibles.find(parrafo => parrafo.innerHTML == "Obligatorio").setAttribute("class", "oculto");
        }
        hayError = true;
    }else{
        
    }

    if (!hayError) {
        localStorage.setItem("usuarioID", document.getElementById("usuario").value);
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

    let labelDireccion = document.createElement("label");
    labelDireccion.htmlFor = "direccion";
    labelDireccion.innerHTML = "Dirección";
    formulario.appendChild(labelDireccion);

    let inputDireccion = document.createElement("input");
    inputDireccion.type = "text";
    inputDireccion.id = "direccion";
    formulario.appendChild(inputDireccion);

    let labelUsuario = document.createElement("label");
    labelUsuario.htmlFor = "usuario";
    labelUsuario.innerHTML = "Usuario";
    formulario.appendChild(labelUsuario);

    let inputUsuario = document.createElement("input");
    inputUsuario.type = "text";
    inputUsuario.id = "usuario";
    formulario.appendChild(inputUsuario);

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

onload = () => {
    localStorage.clear();
    cargarUsuarios();
    cargarFormulario();
}