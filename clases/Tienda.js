class Tienda {
    constructor(listaClientes, listaProductos, listaCompras) {
        this.listaClientes = listaClientes;
        this.listaProductos = listaProductos;
        this.listaCompras = listaCompras;
    }

    altaCliente(lista, nuevoCliente) {
        lista.push(nuevoCliente);
    }

    modificarCliente(lista, id, nuevosDatos) {
        const index = lista.findIndex(item => item.id === id);
        if (index !== -1) {
            lista[index] = { ...lista[index], ...nuevosDatos };
            return true;
        }
        return false;
    }

    eliminar(lista, id) {
        return lista.filter(obj => obj.id != id);
    }

    consultar(lista, id) {
        return lista.find(obj => obj.id == id);
    }
}