const producto={
nombre:"tablet",
precio:300,
disponible:false

}

const cliente = {
    nombre:"Juan",
    premium:true,
    direccion:{
        calle: "calle México"
    }
}

// para extraer el valor y renombrarlo con otra variable

const {nombre} = producto;
const {nombre:nombreClient, direccion:{calle:calle1}} = cliente;

console.log(nombre);
console.log(nombreClient)
// Tambien se puede usar solo  direccion:{calle}} y seria 
//console.log(calle)


console.log(calle1)


