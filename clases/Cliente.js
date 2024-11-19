class Cliente {
    constructor(id, nombre, edad, email, telefono, direccion, usuario, contrasena) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    getId() { return this.id; }
    getNombre() { return this.nombre; }
    getEdad() { return this.edad; }
    getEmail() { return this.email; }
    getTelefono() { return this.telefono; }
    getDireccion() { return this.direccion; }
    getUsuario() { return this.usuario; }
    getContrasena() { return this.contrasena; }

    setId(id) { this.id = id; }
    setNombre(nombre) { this.nombre = nombre; }
    setEdad(edad) { this.edad = edad; }
    setEmail(email) { this.email = email; }
    setTelefono(telefono) { this.telefono = telefono; }
    setDireccion(direccion) { this.direccion = direccion; }
    setUsuario(usuario) { this.usuario = usuario; }
    setContrasena(contrasena) { this.contrasena = contrasena; }
}