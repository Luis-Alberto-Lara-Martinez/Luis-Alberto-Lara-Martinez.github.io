let listaProductos;

function cargarProductos(lista) {
    $('<label for="filtrado">Filtrar por nombre</label>').appendTo(document.body);
    let texto = $('<input type="text" id="filtrado"></input>').appendTo(document.body);
    $(texto).on("input", () => {
        let filtro = texto.val().toLowerCase();
        let productosFiltrados;

        if (filtro == "") {
            productosFiltrados = listaProductos;
        } else {
            productosFiltrados = lista.filter(producto =>
                producto.nombre.toLowerCase().includes(filtro)
            );
        }

        $('#contenedor').empty();
        cargarProductosEnContenedor(productosFiltrados);
    });

    let ordenar = $('<select></select>').appendTo(document.body);
    $('<option value="...">Ordenar por ...</option>').appendTo(ordenar);
    $('<option value="categoria">Categoría</option>').appendTo(ordenar);
    $('<option value="precio">Precio</option>').appendTo(ordenar);

    $(ordenar).on("change", () => {
        let valorOrdenar = $(ordenar).val();

        if (valorOrdenar == "precio") {
            lista.sort((a, b) => a.precio - b.precio);
        } else if (valorOrdenar == "categoria") {
            lista.sort((a, b) => {
                if (a.categoria < b.categoria) return -1;
                if (a.categoria > b.categoria) return 1;
                return 0;
            });
        }

        $('#contenedor').empty();
        cargarProductosEnContenedor(lista);
    });

    let contenedor = $("<div id='contenedor'></div>").appendTo(document.body);
    $(contenedor).css({
        "display": "grid",
        "grid-template-columns": "repeat(5, 1fr)",
        "gap": "25px"
    });

    cargarProductosEnContenedor(lista);
}

function cargarProductosEnContenedor(lista) {
    $.each(lista, function (indice, producto) {
        let div = $("<div></div>").appendTo('#contenedor');
        $.each(producto, function (campo, valor) {
            switch (campo) {
                case "nombre":
                    $("<p></p>").appendTo(div).text(valor).css({
                        "background-color": "yellow",
                        "color": "black"
                    });
                    break;
                case "descripcion":
                case "precio":
                case "categoria":
                    $("<p></p>").appendTo(div).text(valor);
                    break;
                case "imagen":
                    $(`<img src="${valor}" alt="${campo}">`).appendTo(div).css("width", "200px");
                    break;
                default:
                    break;
            }
            $("<br />").appendTo(div);
        });

        let boton = $('<button>Agregar al carrito</button>').appendTo(div);
        $(boton).css({
            "background-color": "green",
            "padding": "10px",
            "cursor": "pointer",
            "border": "none",
            "border-radius": "10px"
        });
        $(boton).hover(function () {
            boton.css("background-color", "blue");
        }, function () {
            boton.css("background-color", "green");
        }
        );
        $(boton).on("click", () => {
            let carrito = JSON.parse(localStorage.getItem("carrito"));
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            localStorage.setItem("cantidadCarrito", parseInt(localStorage.getItem("cantidadCarrito")) + 1);
            alert(`Producto "${producto.nombre}" agregado al carrito`);
            location.reload();
        });
    });
}

$(document).ready(() => {
    HainiciadoSesion();
    cargarMenu();
    cargarCantidadYEstiloCarrito();
    listaProductos = JSON.parse(localStorage.getItem("tienda")).listaProductos;
    cargarProductos(listaProductos);
});
