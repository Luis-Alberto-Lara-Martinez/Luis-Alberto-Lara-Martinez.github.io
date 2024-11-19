async function cargarTienda() {
    let lista = await fetch("../json/clientes.json");
    let listaClientes = await lista.json();

    lista = await fetch("../json/productos.json");
    let listaProductos = await lista.json();

    lista = await fetch("../json/compras.json");
    let listaCompras = await lista.json();

    localStorage.setItem("tienda", JSON.stringify(new Tienda(listaClientes, listaProductos, listaCompras)));
    localStorage.setItem("cantidadCarrito", "0");
}

function HainiciadoSesion() {
    if (!localStorage.getItem("tienda") || !localStorage.getItem("usuario") || !localStorage.getItem("cantidadCarrito")) {
        location.href = "aterrizaje.html";
    }
}

function cargarMenu() {
    let contenidoHTML = `<nav>
        <ul>
            <li><a href="../html/inicio.html">Inicio</a></li>
            <li><a href="../html/productosCarrusel.html">Productos en carrusel</a></li>
            <li><a href="../html/productosConOrdenFiltro.html">Productos con orden y filtro</a></li>
            <li><a href="../html/historialCompras.html">Historial de compras</a></li>
            <li><a href="../html/comentarios.html">Comentarios</a></li>
            <li><a href="../html/datosPersonales.html">Datos personales</a></li>
            <li><a href="../html/aterrizaje.html" onclick="vaciarCarritoYComentarios()">Cerrar sesión</a></li>
            <li><img src="../img/carrito.png">
                <p></p>
            </li>
        </ul>
    </nav>`;
    document.body.insertAdjacentHTML("afterbegin", contenidoHTML);
}

function vaciarCarritoYComentarios() {
    localStorage.removeItem("cantidadCarrito");
    localStorage.removeItem("comentarios");
}

function cargarCantidadYEstiloCarrito() {
    let parrafoCesta = document.getElementsByTagName("p")[0];
    parrafoCesta.innerHTML = `${parseInt(localStorage.getItem("cantidadCarrito"))}`;
    parrafoCesta.addEventListener("click", () => { location.href = "carrito.html" });
    document.images[0].addEventListener("click", () => { location.href = "carrito.html" });
}