const producto={
    nombre:"tablet",
    precio:300,
    disponible:false
    
    }

    // unir un obejto completo
const cliente = {
        nombre:"Juan",
        premium:true,
        direccion:{
        calle: "calle México",
        },
        producto  //Objeto producto

    }

console.log(cliente);
///////////////////
console.log("De esta manera no sale que es otro objeto si no que se suma")
const cliente2 = {
    nombre2:"Juan",
    premium2:true,
    direccion2:{
    calle2: "calle México"
    },
    ...producto  //Objeto producto
}

console.log(cliente2)
console.log("--------------------")
const objetoPrueba ={
    objeto:"tv",
    canal:"305"
}
const nuevoObjeto = {
productoNuevo: {...producto},
clienteNuevo:{...cliente},
objetoPrueba, // Para heredar si se llaman igual 
}
console.log(nuevoObjeto)

// Usando Object.assign 
console.log("------------")
const nuevoObjeto2= Object.assign(producto,objetoPrueba) 
console.log(nuevoObjeto2)