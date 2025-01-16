// Objetos Manipulacion

const producto = {
nombre: "Tablet",
precio: 300,
disponible:false
}
// Cambiar el valor de un objeto

producto.disponible = true;
console.log(producto.disponible);

// Agregar un valor nuevo
console.log("----Agregar un valor nuevo----");

producto.imagen = "imagen.jpg";
console.log(producto.imagen);

console.log(producto);
// Eliminar un valor
console.log("----Eliminar un valor----");
delete producto.precio;
console.log(producto);
// como hacer que un objeto no se pueda modificar (Aplica para js )
console.log("----como hacer que un objeto no se pueda modificar----");
Object.freeze(producto);
delete producto.disponible; // no lo elimina 
producto.nombre = "Tv"; // no lo modifica
console.log(producto);

// Object.seal, no se puede agregar pero si modificar valores actuales 
console.log("----Object.seal----");
const producto2 = {
nombre2: "Tablet",
precio2: 300,
disponible2:false

}
Object.seal(producto2);
producto2.nombre2 = "Tv"; // si lo modifica
producto2.saludo2 = "Hola"; // no lo agrega
console.log(producto2);
