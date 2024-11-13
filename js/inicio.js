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
            logo.style.top = "";
            logo.style.left = "";
        }
    }, (duracion / veces));
}

function moverLogo() {
    let maxX = contenedor.clientWidth - logo.clientWidth;
    let maxY = contenedor.clientHeight - logo.clientHeight;

    let posicionAleatoriaX = parseInt(Math.random() * maxX);
    let posicionAleatoriaY = parseInt(Math.random() * maxY);

    logo.style.left = `${posicionAleatoriaX}px`;
    logo.style.top = `${posicionAleatoriaY}px`;
}

onload = () => {
    logo = document.images[1];
    contenedor = document.querySelectorAll("div")[1];
    logo.addEventListener("click", () => { cargarAnimacion(3, 3000); });
    cargarCantidadEstiloCarrito();
}