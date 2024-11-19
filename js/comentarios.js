function cargarComentarios() {
    let contenedor = document.body.querySelector("div");
    contenedor.style.display = "flex";
    contenedor.style.alignItems = "center";
    contenedor.style.gap = "20px";

    let boton = contenedor.querySelector("button");
    boton.style.backgroundColor = "orange";
    boton.style.padding = "10px"
    boton.style.border = "none";
    boton.style.borderRadius = "10px";
    boton.style.cursor = "pointer";

    let comentarioUsuario = contenedor.querySelector("textarea");
    comentarioUsuario.style.color = "black";
    comentarioUsuario.style.width = "300px";

    let comentarios = document.body.querySelectorAll("div")[1];
    if (!localStorage.getItem("comentarios")) {
        comentarios.innerHTML = "NO SE HAN AÑADIDO COMENTARIOS"
    } else {
        comentarios.innerHTML = localStorage.getItem("comentarios");
    }
    boton.addEventListener("click", () => {
        contenidoComentarioUsuario = comentarioUsuario.value.trim();
        if (contenidoComentarioUsuario != "") {
            if (!localStorage.getItem("comentarios")) {
                comentarios.innerHTML = "LISTADO DE COMENTARIOS<br/>";
                comentarios.innerHTML += contenidoComentarioUsuario + "<br/>";
            } else {
                comentarios.innerHTML += contenidoComentarioUsuario + "<br/>";
            }
            localStorage.setItem("comentarios", comentarios.innerHTML);
        } else {
            let error = document.getElementById("error");
            error.innerHTML = "Error, no ha insertado ningún comentario";
            setTimeout(() => {
                error.innerHTML = "";
            }, 5000);
        }
    })
}

onload = () => {
    HainiciadoSesion();
    cargarMenu();
    cargarCantidadYEstiloCarrito();
    cargarComentarios();
};