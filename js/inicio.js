let logo;
let contenedor;

function cargarAnimacion(veces, duracion) {
    let contador = 0;
    let animacion = setInterval(() => {
        if (contador < veces) {
            moverLogo();
            contador++;
        } else {
            clearInterval(animacion);
            logo.css({ top: "", left: "" });
        }
    }, (duracion / veces));
}

function moverLogo() {
    let maxX = contenedor.width() - logo.width();
    let maxY = contenedor.height() - logo.height();
    let posicionAleatoriaX = Math.random() * maxX;
    let posicionAleatoriaY = Math.random() * maxY;
    logo.css({ left: `${posicionAleatoriaX}px`, top: `${posicionAleatoriaY}px` });
}

$(document).ready(() => {
    HainiciadoSesion();
    cargarMenu();
    cargarCantidadYEstiloCarrito();
    logo = $("img").eq(1);
    contenedor = $("div").eq(1);
    logo.on("click", () => {
        cargarAnimacion(3, 3000);
    });
});
