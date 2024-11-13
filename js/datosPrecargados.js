let cantidadCesta = 0;

let listaClientes = [];
let listaProductos = [];
let listaCompras = [];

let tienda;

async function cargarDatos() {
    let lista = await fetch("../json/clientes.json");
    listaClientes = await lista.json();

    lista = await fetch("../json/productos.json");
    listaProductos = await lista.json();

    lista = await fetch("../json/compras.json");
    listaCompras = await lista.json();
}

function cargarCantidadEstiloCarrito() {
    let parrafoCesta = document.getElementsByTagName("p")[0]
    parrafoCesta.innerHTML = `${cantidadCesta}`;
    parrafoCesta.addEventListener("click", () => { location.href = "carrito.html" });

    let imagenCarrito = document.images[0];
    imagenCarrito.addEventListener("click", () => { location.href = "carrito.html" });
}