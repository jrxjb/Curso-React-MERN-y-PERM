const producto = {
nombre: "Tablet",
precio: 300,
disponible: false
}

console.log(producto);
console.log(typeof producto);
console.table(producto);

// Acceder a los valores de un objeto
console.log("acceder a los valores de un objeto");

console.log(producto.nombre);


/////////////////////////////////
// Destrucuturing
console.log("Destrucuturing");
const {nombre} = producto;
console.log(nombre);
// Es lo mismo que hacer esto
const nombre2 = producto.nombre;
console.log(nombre2);
// La difertencia es que cuando tienes muchas variables es mas facil con destructuring
//Ej
const  producto2 = {
    nombre3: "Monitor",
    precio3: 400,
    disponible3: true
}
const { nombre3 , precio3, disponible3} = producto2;
console.log(nombre3);
console.log(precio3);
console.log(disponible3);

// object Literal Enhacement
console.log("----object Literal Enhacement----");
const autenticado = true;
const usuario = "Juan";
// si se llaman igual La llave y el valor puedes dejar solo la Key se llama usuarioK solo para distingir 
const nuevoObjeto= {
    autenticado,
    usuarioK: usuario
}
console.log(nuevoObjeto);

