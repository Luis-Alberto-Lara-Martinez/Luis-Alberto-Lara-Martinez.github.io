function cargarDatosCarrito() {
    cantidadCesta = 1;
    let div = document.getElementsByTagName("div")[0]
    if (cantidadCesta != 0) {
        
        let contenidoHTML = "<p>Hola</p>";
        div.insertAdjacentHTML("afterend", contenidoHTML);
    } else {
        div.insertAdjacentHTML("afterend", "<p>No ha seleccionado ningún producto</p>");
    }
}

onload = () => {
    cargarCantidadEstiloCarrito();
    cargarDatosCarrito();
}