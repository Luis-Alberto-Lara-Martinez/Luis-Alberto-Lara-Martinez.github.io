let listaClientes = [];

async function cargarUsuarios() {
    let lista = await fetch("../json/clientes.json");
    listaClientes = await lista.json();
}

let listaProductos = [];

async function cargarProductos() {
    let lista = await fetch("../json/productos.json");
    listaProductos = await lista.json();
}

let listaCompras = [];

async function cargarCompras() {
    let lista = await fetch("../json/compras.json");
    listaCompras = await lista.json();
}

let cantidadCesta = 0;