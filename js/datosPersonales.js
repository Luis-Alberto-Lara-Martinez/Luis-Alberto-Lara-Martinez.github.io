function comprobarNuevoDato(condicion) {
    if (condicion) {
        return true;
    } else {
        return false;
    }
}

function cambiarDatosUsuario() {
    let propiedadSeleccionada = document.querySelector("select").value;
    let parrafoError = document.querySelectorAll("p")[1];
    parrafoError.style.color = "red";

    if (propiedadSeleccionada != "") {
        let esValorValido = true;
        let valorNuevo = document.getElementsByTagName("input")[0].value;
        switch (propiedadSeleccionada) {
            case "nombre":
            case "direccion":
                if (!comprobarNuevoDato(valorNuevo != "")) {
                    esValorValido = false;
                }
                break;
            case "edad":
                if (!comprobarNuevoDato(/^[0-9]+$/.test(valorNuevo) && parseInt(valorNuevo) >= 18)) {
                    esValorValido = false;
                }
                break;
            case "email":
                if (!comprobarNuevoDato(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorNuevo))) {
                    esValorValido = false;
                }
                break;
            case "telefono":
                if (!comprobarNuevoDato(/[0-9]{9}$/.test(valorNuevo))) {
                    esValorValido = false;
                }
                break;
            case "usuario":
                if (!comprobarNuevoDato(/^[^\d].*/.test(valorNuevo))) {
                    esValorValido = false;
                }
                break;
            case "contrasena":
                if (!comprobarNuevoDato(/^[^\d][\w\W]{3,}$/.test(valorNuevo))) {
                    esValorValido = false;
                }
                break;
            default:
                break;
        }

        if (esValorValido) {
            parrafoError.innerHTML = "";

            let tienda = JSON.parse(localStorage.getItem("tienda"));
            let usuario = JSON.parse(localStorage.getItem("usuario"));

            tienda.listaClientes.find(cliente => cliente.id == usuario.id)[propiedadSeleccionada] = valorNuevo;
            usuario[propiedadSeleccionada] = valorNuevo;

            localStorage.setItem("tienda", JSON.stringify(tienda));
            localStorage.setItem("usuario", JSON.stringify(usuario));

            alert("Propiedad modificada correctamente");
            location.reload();
        } else {
            parrafoError.innerHTML = "Error, valor no válido";
        }
    } else {
        parrafoError.innerHTML = "Error, selecciona una propiedad a cambiar";
    }

}

onload = () => {
    HainiciadoSesion();
    cargarMenu();
    cargarCantidadYEstiloCarrito();
    document.getElementsByTagName("button")[0].addEventListener("click", cambiarDatosUsuario);
}