let logo;
let contenedor;
let contador = 0;

function moverLogo() {
    let maxX = parseInt(contenedor.ClientWird- parseInt(logo.style.width.replace("px", "")));
    let maxY = parseInt(contenedor.style.height.replace("px", "")) - parseInt(logo.style.height.replace("px", ""));

    let posicionAleatoriaX = parseInt(Math.random() * maxX);
    let posicionAleatoriaY = parseInt(Math.random() * maxY);

    logo.style.left = `${posicionAleatoriaX}px`;
    logo.style.top = `${posicionAleatoriaY}px`;
}

function cargarAnimacion(veces, duracion) {
   

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
onload = () => {
    logo = document.images[1];
    contenedor = document.querySelectorAll("div")[1];
    logo.addEventListener("click", () => { cargarAnimacion(3, 3000) });
}