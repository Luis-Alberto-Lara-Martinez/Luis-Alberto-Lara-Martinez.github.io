let posicion = 0;
let productos = JSON.parse(localStorage.getItem("tienda")).listaProductos;

function mostrarProducto(posicion) {
    let div = document.getElementsByTagName("div")[0];
    div.innerHTML = "";
    for (campo in productos[posicion]) {
        let contenidoHTML = "";
        switch (campo) {
            case "nombre":
            case "descripcion":
            case "precio":
            case "categoria":
                contenidoHTML += `<p>${productos[posicion][campo]}</p>
                                <br />`;
                break;
            case "imagen":
                contenidoHTML += `<img width="200px" src="${productos[posicion][campo]}">`;
                break;
            default:
                break;
        }
        div.insertAdjacentHTML("beforeend", contenidoHTML);
    }
    let botonCompra = `<br />
                    <button type="button">Añadir a carrito</button>`;
    div.insertAdjacentHTML("beforeend", botonCompra);
    document.querySelectorAll("button")[2].addEventListener("click", () => {
        anadirACarrito(posicion);
        alert("Producto añadido correctamente");
    });
}

function cambiarPosicion(movimiento) {
    if (movimiento == "mas") {
        posicion++;
        if (posicion > productos.length - 1) {
            posicion = 0;
        }
    } else {
        posicion--;
        if (posicion < 0) {
            posicion = productos.length - 1;
        }
    }
    mostrarProducto(posicion);
}

function anadirACarrito(posicion) {
    let cantidadCarrito = parseInt(localStorage.getItem("cantidadCarrito"));
    cantidadCarrito++;
    localStorage.setItem("cantidadCarrito", cantidadCarrito);
    cargarCantidadYEstiloCarrito();
    if (!localStorage.getItem("carrito")) {
        let productosAComprar = [];
        productosAComprar.push(productos[posicion]);
        localStorage.setItem("carrito", JSON.stringify(productosAComprar));
    } else {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito.push(productos[posicion]);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

onload = () => {
    HainiciadoSesion();
    cargarMenu();
    cargarCantidadYEstiloCarrito();
    let botones = document.getElementsByTagName("button");
    botones[0].addEventListener("click", () => {
        cambiarPosicion("menos");
    });
    botones[1].addEventListener("click", () => {
        cambiarPosicion("mas");
    });
    mostrarProducto(posicion);
}