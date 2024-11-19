function cargarDatosCarrito() {
    let contenidoHTML = "";
    let precioTotal = 0;
    if (localStorage.getItem("carrito")) {
        contenidoHTML += "<h1>HA SELECCIONADO LOS SIGUIENTES PRODUCTOS</h1>";
        let productosSeleccionados = JSON.parse(localStorage.getItem("carrito"));

        let cantidadPorProducto = [];
        productosSeleccionados.forEach(producto => {
            if (cantidadPorProducto[producto.id]) {
                cantidadPorProducto[producto.id]++;
            } else {
                cantidadPorProducto[producto.id] = 1;
            }
        });

        let productosUnicos = productosSeleccionados.filter((producto, indice, array) => indice == array.findIndex((siguienteProducto) => (siguienteProducto.id == producto.id)));

        productosUnicos.forEach(producto => {
            contenidoHTML += `<div><br />
                <h3>${producto.nombre}</h3>
                <img src="${producto.imagen}" width="200px">
                <p>Cantidad: ${cantidadPorProducto[producto.id]}</p>
                <p>Precio por unidad: ${producto.precio}</p>
                <p>Precio Total: ${producto.precio * cantidadPorProducto[producto.id]}</p>
                </div>`;
            precioTotal += producto.precio * cantidadPorProducto[producto.id];
        });

        contenidoHTML += `<h3>TOTAL COMPRA: ${precioTotal}</h3>
                <button id="comprar" type="button">Comprar</button>`;
        document.body.insertAdjacentHTML("beforeend", contenidoHTML);

        let botonComprar=document.getElementById("comprar");
        botonComprar.style.padding="10px";
        botonComprar.style.backgroundColor="green";
        botonComprar.style.border="none";
        botonComprar.style.borderRadius="10px";
        botonComprar.style.cursor="pointer";
        botonComprar.addEventListener("mouseover", ()=>{
            botonComprar.style.backgroundColor="rgb(0, 109, 0)";
        });
        botonComprar.addEventListener("mouseout", ()=>{
            botonComprar.style.backgroundColor="green";
        });
        botonComprar.addEventListener("click", () => {
            let tienda = JSON.parse(localStorage.getItem("tienda"));
            let usuario = JSON.parse(localStorage.getItem("usuario"));
            let fechaHoy = new Date();
            let productosComprados = productosUnicos.map(producto => {
                return { idProducto: producto.id, cantidad: cantidadPorProducto[producto.id], precio: producto.precio };
            });

            let nuevaCompra = new Compra(tienda.listaCompras.length + 1, usuario.id, productosComprados, `${fechaHoy.getDate()}-${fechaHoy.getMonth() + 1}-${fechaHoy.getFullYear()}`, precioTotal);
            tienda.listaCompras.push(nuevaCompra);
            localStorage.setItem("tienda", JSON.stringify(tienda));
            localStorage.removeItem("carrito");
            localStorage.setItem("cantidadCarrito", "0");
            alert("Compra realizada correctamente");
            location.reload();
        });
    } else {
        contenidoHTML += "<h1>NO HA SELECCIONADO NINGÚN PRODUCTO</h1>";
        document.body.insertAdjacentHTML("beforeend", contenidoHTML);
    }
}

onload = () => {
    HainiciadoSesion();
    cargarMenu();
    cargarCantidadYEstiloCarrito();
    cargarDatosCarrito();
};
