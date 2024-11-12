class Tienda {
    constructor(listaClientes, listaProductos, listaCompras) {
        this.listaClientes = listaClientes;
        this.listaProductos = listaProductos;
        this.listaCompras = listaCompras;
    }

    alta(lista, objeto) {
        lista.push(objeto);
    }

    modificar(lista, id, nuevosDatos) {
        const index = lista.findIndex(item => item.id === id);
        if (index !== -1) {
            lista[index] = { ...lista[index], ...nuevosDatos };
            return true; // Modificación exitosa
        }
        return false; // No se encontró el elemento con el ID proporcionado
    }

    eliminar(lista, id) {
        return lista.filter(obj=>obj.id!=id);
    }

    consultar(lista, id) {
        return lista.find(obj => obj.id == id);
    }
}
