class Compra {
    constructor(id, idCliente, listaProductos, fechaCompra, totalCompra) {
        this.id = id;
        this.idCliente = idCliente;
        this.listaProductos = listaProductos;
        this.fechaCompra = fechaCompra;
        this.totalCompra = totalCompra;
    }

    getId() { return this.id; }
    getIdCliente() { return this.idCliente; }
    getListaProductos() { return this.listaProductos; }
    getFechaCompra() { return this.fechaCompra; }
    getTotalCompra() { return this.totalCompra; }

    setId(id) { this.id = id; }
    setIdCliente(idCliente) { this.idCliente = idCliente; }
    setListaProductos(listaProductos) { this.listaProductos = listaProductos; }
    setFechaCompra(fechaCompra) { this.fechaCompra = fechaCompra; }
    setTotalCompra(totalCompra) { this.totalCompra = totalCompra; }
}
