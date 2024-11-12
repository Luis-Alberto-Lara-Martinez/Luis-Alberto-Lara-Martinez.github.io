document.addEventListener('DOMContentLoaded', function () {
    const logo = document.images[1];
    const contenedor = document.querySelectorAll("div")[1];

    logo.addEventListener('click', function () {
        cambiarPosicion(3, 3000); // Cambia de posición 3 veces en 3 segundos
    });

    function cambiarPosicion(veces, duracion) {
        const intervalo = duracion / veces;
        let contador = 0;

        const intervalID = setInterval(() => {
            if (contador < veces) {
                moverLogo();
                contador++;
            } else {
                clearInterval(intervalID);
                logo.style.top = "";
                logo.style.left = "";
            }
        }, intervalo);
    }

    function moverLogo() {
        const maxX = contenedor.clientWidth - logo.clientWidth;
        const maxY = contenedor.clientHeight - logo.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        logo.style.left = randomX + 'px';
        logo.style.top = randomY + 'px';
    }
});


/**/

let logo = document.images[1];
function cargarAnimacion(veces, duracion) {
    let intervalo = duracion / veces;

}
onload = () => {
    document.images[1].addEventListener("click", () => { cargarAnimacion(3, 3000) })
}