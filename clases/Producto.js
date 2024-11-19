class Producto {
    constructor(id, nombre, descripcion, precio, categoria, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
    
    getId() { return this.id; }
    getNombre() { return this.nombre; }
    getDescripcion() { return this.descripcion; }
    getPrecio() { return this.precio; }
    getCategoria() { return this.categoria; }
    getImagen() { return this.imagen; }

    setId(id) { this.id = id; }
    setNombre(nombre) { this.nombre = nombre; }
    setDescripcion(descripcion) { this.descripcion = descripcion; }
    setPrecio(precio) { this.precio = precio; }
    setCategoria(categoria) { this.categoria = categoria; }
    setImagen(imagen) { this.imagen = imagen; }
}
