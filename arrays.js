let continuar = true
let opcion
let eleccion
let precio
let total = 0


class productos {
    constructor(producto,precio){
        this.producto = producto 
        this.precio = precio
    }
}

let carrito = [];


function agregarAlCarrito(item) {
    carrito.push(item)
}


const item = new productos ("Cargador Inalambrico",1000)
const item2 = new productos ("Cable USB",500)
const item3 = new productos ("Auriculares Inalambrico",5000)
const item4 = new productos ("Teclado Gamer",3500)

while(continuar){
    do{
    opcion= parseInt(prompt("Ingrese la opcion deseada:\n1. Accesorios celulares\n2. Accesorios de PC"));
    if(isNaN(opcion)){
        alert("Ingrese una opción válida")
        }   
    }while (isNaN(opcion))

    switch (opcion) { 
    case 1:
        do{
        eleccion=parseInt(prompt("1.Cargador Inalambrico $1000\n2.Cable USB $500"));
        if(isNaN(eleccion)){
            alert("Ingrese una opción válida")
            }       
        }while (isNaN(eleccion))

        switch (eleccion){
        case 1:     
            alert("Cargador Inalambrico $1000")             
            precio = 1000;  
            precioFinal(precio);
            agregarAlCarrito(item);
           
        break;
        case 2: 
            alert("Cable USB $500")
            precio = 500; 
            precioFinal(precio);     
            agregarAlCarrito(item2);
        break;
     
    }
    break;
    case 2:
        do{
        eleccion=parseInt(prompt("1.Auriculares Inalambricos $5000\n2.Teclado Gamer $3500"));
        if(isNaN(eleccion)){
            alert("Ingrese una opción válida")
            }       
        }while (isNaN(eleccion))
        switch (eleccion){
            case 1: 
                alert("Auriculares Inalambrico $5000")
                precio = 5000;
                precioFinal(precio);                        
                agregarAlCarrito(item3);                                      
            break;
            case 2: 
                alert("Teclado Gamer $3500")
                precio = 3500;  
                precioFinal(precio);   
                agregarAlCarrito(item4); 
            break;
            default:
                alert("Ingrese una opción válida")
                break;
        }
     break;

    default:
        alert("Ingrese una opción válida")
        break;
    }   
    let condicion= prompt("¿Desea seguir comprando?").toLowerCase()
    if (condicion=="no") {
        continuar=false
    }
   
}
function precioFinal(precio) {
    total += precio; 
        return total
}


carrito.forEach(listado => {
    console.log(listado);
}); 
alert("ATENCION: Ver carrito en consola")
alert (`TOTAL: ${total}`)
console.log(total)