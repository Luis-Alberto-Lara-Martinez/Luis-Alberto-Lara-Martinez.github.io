function comprobarExistenciaUsuario() {
    let usuarioBuscado = document.forms[0].querySelectorAll("input")[0].value.trim();
    let contrasenaBuscada = document.forms[0].querySelectorAll("input")[1].value.trim();

    let existeUsuario = false;
    let tienda = JSON.parse(localStorage.getItem("tienda"));
    tienda.listaClientes.forEach(cliente => {
        if (cliente.usuario == usuarioBuscado && cliente.contrasena == contrasenaBuscada) {
            localStorage.setItem("usuario", JSON.stringify(cliente));
            existeUsuario = true;
        }
    });

    if (!existeUsuario) {
        if (document.getElementsByClassName("oculto").length > 0) {
            document.getElementsByClassName("oculto")[0].setAttribute("class", "visible");
        }
    } else {
        document.forms[0].submit();
    }
}

function comprobacionCampo(condicion, listaParrafosOcultos, listaParrafosVisibles, parrafoErrorHTML) {
    let parrafoErrorOculto = listaParrafosOcultos.find(parrafo => parrafo.innerHTML == parrafoErrorHTML);
    let noHayError = true;
    if (condicion) {
        noHayError = false;
        if (parrafoErrorOculto) {
            parrafoErrorOculto.setAttribute("class", "visible");
        }
    } else {
        if (!parrafoErrorOculto) {
            let parrafoErrorVisible = listaParrafosVisibles.find(parrafo => parrafo.innerHTML == parrafoErrorHTML);
            if (parrafoErrorVisible) {
                parrafoErrorVisible.setAttribute("class", "oculto");
            }
        }
    }
    return noHayError;
}

function validacionNuevoUsuario() {
    let noHayError = true;
    let listaParrafosOcultos = [...document.getElementsByClassName("oculto")];
    let listaParrafosVisibles = [...document.getElementsByClassName("visible")];
    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    if (!comprobacionCampo(nombre == "", listaParrafosOcultos, listaParrafosVisibles, "Obligatorio")) {
        noHayError = false;
    }
    if (!comprobacionCampo(!(/^[0-9]+$/.test(edad)) || parseInt(edad) < 18, listaParrafosOcultos, listaParrafosVisibles, "Prohibido menores (+18)")) {
        noHayError = false;
    }
    if (!comprobacionCampo(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)), listaParrafosOcultos, listaParrafosVisibles, "Formato inválido")) {
        noHayError = false;
    }
    if (!comprobacionCampo(!(/^[0-9]{9}$/.test(telefono)), listaParrafosOcultos, listaParrafosVisibles, "Ha de tener 9 números")) {
        noHayError = false;
    }
    if (!comprobacionCampo(direccion == "", listaParrafosOcultos, listaParrafosVisibles, "Dirección inválida")) {
        noHayError = false;
    }
    if (!comprobacionCampo(!(/^[^\d].*/.test(usuario)), listaParrafosOcultos, listaParrafosVisibles, "No puede empezar por un número")) {
        noHayError = false;
    }
    if (!comprobacionCampo(!(/^[^\d][\w\W]{3,}$/.test(contrasena)), listaParrafosOcultos, listaParrafosVisibles, "Mínimo 4 caracteres y no puede empezar por un número")) {
        noHayError = false;
    }

    if (noHayError) {
        let tienda = JSON.parse(localStorage.getItem("tienda"));
        let nuevoCliente = new Cliente(tienda.listaClientes.length + 1, nombre, edad, email, telefono, direccion, usuario, contrasena);
        let objetoTienda = new Tienda(tienda.listaClientes, tienda.listaProductos, tienda.listaCompras);

        objetoTienda.alta(objetoTienda.listaClientes, nuevoCliente);

        localStorage.setItem("tienda", JSON.stringify(objetoTienda));
        localStorage.setItem("usuario", JSON.stringify(nuevoCliente));
        document.forms[0].submit();
    }
}

function crearLabelInput(formulario, id, contenidoHTML, tipoInput) {
    let label = document.createElement("label");
    label.htmlFor = id;
    label.innerHTML = contenidoHTML;
    formulario.appendChild(label);

    let input = document.createElement("input");
    input.type = tipoInput;
    input.id = id;
    formulario.appendChild(input);
}

function crearParrafoError(contenidoHTML) {
    let parrafoError = document.createElement("p");
    parrafoError.innerHTML = contenidoHTML;
    parrafoError.className = "oculto";
    return parrafoError;
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

    crearLabelInput(formulario, "nombre", "Nombre", "text");
    formulario.appendChild(crearParrafoError("Obligatorio"));

    crearLabelInput(formulario, "edad", "Edad", "number");
    formulario.appendChild(crearParrafoError("Prohibido menores (+18)"));

    crearLabelInput(formulario, "email", "Email", "email");
    formulario.appendChild(crearParrafoError("Formato inválido"));

    crearLabelInput(formulario, "telefono", "Teléfono", "tel");
    formulario.appendChild(crearParrafoError("Ha de tener 9 números"));

    crearLabelInput(formulario, "direccion", "Dirección", "text");
    formulario.appendChild(crearParrafoError("Dirección inválida"));

    crearLabelInput(formulario, "usuario", "Usuario", "text");
    formulario.appendChild(crearParrafoError("No puede empezar por un número"));

    crearLabelInput(formulario, "contrasena", "Contraseña", "password");
    formulario.appendChild(crearParrafoError("Mínimo 4 caracteres y no puede empezar por un número"));

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

    crearLabelInput(formulario, "usuario", "Usuario", "text");
    crearLabelInput(formulario, "contrasena", "Contraseña", "password");
    formulario.appendChild(crearParrafoError("Error, usuario y/o contraseña no válidos"));

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
    localStorage.removeItem("usuario");
    localStorage.removeItem("carrito");
    if (!localStorage.getItem("tienda") || !localStorage.getItem("cantidadCarrito")) {
        await cargarTienda();
    }
    cargarFormulario();
}