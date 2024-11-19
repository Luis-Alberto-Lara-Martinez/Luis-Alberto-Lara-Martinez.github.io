class Tienda {
    constructor(listaClientes, listaProductos, listaCompras) {
        this.listaClientes = listaClientes;
        this.listaProductos = listaProductos;
        this.listaCompras = listaCompras;
    }

    alta(lista, nuevoElemento) {
        lista.push(nuevoElemento);
    }

    modificarProducto(idProdcuto, propiedad, valor) {
        this.listaProductos.find(producto => producto.id == idProdcuto).propiedad = valor;
    }

    getCliente(clienteAEncontrar) {
        return this.listaClientes.find(cliente => cliente.id == clienteAEncontrar.id);
    }

    getComprasCliente(idClienteABuscar) {
        return this.listaCompras.filter(compra => compra.idCliente == idClienteABuscar);
    }

    borrarCompraCliente(idCompra) {
        this.listaCompras = this.listaCompras.filter(compra => compra.id != idCompra);
    }
}