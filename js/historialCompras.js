function cargarHistorialCompras() {
    let tienda = JSON.parse(localStorage.getItem("tienda"));
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    usuario = new Cliente(usuario.id, usuario.nombre, usuario.edad, usuario.email, usuario.telefono, usuario.direccion, usuario.usuario, usuario.contrasena);
    let contenidoHTML = "";
    let numeroCompras = 0;
    tienda.listaCompras.forEach(compra => {
        if (compra.idCliente == usuario.getId()) {
            numeroCompras++;
            contenidoHTML += `<h2>Compra ${numeroCompras}</h2>
                            <p>Fecha: ${compra.fechaCompra}</p>
                            <p>Listado de productos:</p>`;
            compra.listaProductos.forEach(productoComprado => {
                tienda.listaProductos.forEach(productoTienda => {
                    if (productoComprado.idProducto == productoTienda.id) {
                        contenidoHTML += `<p style="display: flex; align-items: center">
                                        Nombre: ${productoTienda.nombre}
                                        <img src="${productoTienda.imagen}" style="width: 200px">
                                        Cantidad: ${productoComprado.cantidad}
                                        Precio: ${productoTienda.precio * productoComprado.cantidad}
                                        </p>`;
                    }
                });
            });
            contenidoHTML += `<p style="background-color: green">Total: ${compra.totalCompra}</p>`;
        }
    });

    if (contenidoHTML == "") {
        contenidoHTML += "<h1>NO HA REALIZADO NINGUNA COMPRA</h1>";
    }
    document.body.insertAdjacentHTML("beforeend", contenidoHTML);
}

onload = () => {
    HainiciadoSesion();
    cargarMenu();
    cargarCantidadYEstiloCarrito();
    cargarHistorialCompras();
};
