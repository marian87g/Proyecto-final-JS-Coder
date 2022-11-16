function Producto (nombre, stock, precio, iD, tipoDeComercio
    ){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.iD = iD;
    this.tipoDeComercio = tipoDeComercio

    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        console.log("Queda disponible :" + this.stock + " " + "unidades de " + this.nombre);
    }
}


const productoA = new Producto("Suprema de pollo", 15, 699, 1, "Casa de comidas" )
const productoB = new Producto("Milanesa de ternera", 20, 599, 2, "Casa de comidas" )
const productoC = new Producto("Porcion de papas fritas", 30, 399, 3, "Casa de comidas" )
const productoD = new Producto("Porcion de pure de papas", 20, 299, 4, "Casa de comidas" )

const listaProductos = [productoA, productoB, productoC, productoD]

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaDeProductos", JSON.stringify(listaProductos));

function menu(){
    let opcion = prompt("Menu: \n1 - Ver productos\n2 - Saludar\nESC- Salir")

    switch(opcion){
        case "1":
            listarProductos();
            compraTotal();
            break;
        case "2":
            saludar("Bienvenido a");
            menu();
            break;
        case "ESC":
            saludar("Gracias por visitar")
            break;
        default:
            alert("Opcion Incorrecta")
            menu()
            break;
    }
}


let contador = 0
let listadoProductosMenu = "Estos son nuestros productos: "

for(const producto of listaProductos){
    contador++
    listadoProductosMenu += "\n" + contador + "- " + producto.nombre
}

function listarProductos(){
    alert(listadoProductosMenu)
}



function saludar(){
    swal("Bienvenido!");
}

function stockInsuficiente(stock) {
    alert("No tenemos unidades suficientes de ese producto, puede comprar hasta " + stock + " unidades")
}

function calcularPrecio(precio){
    precioTotalVenta += cantidadComprada * precio;
}

let cantidadComprada;
let precioTotalVenta = 0;

function compra(stock, precio, producto) {
    // cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
    let texto = ''
    let formulario = document.getElementById('formulario')
    let input = document.getElementById('input')
    formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    texto = input.value
    console.log('texto', texto)
    })


    if(cantidadComprada <= stock) {

        calcularPrecio(precio)

        producto.venta(cantidadComprada)

    }
    else {
        stockInsuficiente(stock)
    }
}

function compraTotal(){

    let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos distintos a comprar"))

    for (let i = 0; i < cantidadProductosComprados; i++){

        let productoSeleccionado = prompt("Ingrese el nombre del producto que quiere comprar")

        let productoBuscado = listaProductos.find(x => x.nombre == productoSeleccionado)

        if(productoBuscado){

        compra(productoBuscado.stock, productoBuscado.precio)

        }
        else{
            alert("El producto ingresado no existe")
        }

    }

    alert("El precio de su compra es de: $" + precioTotalVenta);

}

menu()

let boton1 = document.querySelector('.boton')

boton1.addEventListener('click', renderProductos )

function renderProductos() {
    let contenedorCards = document.createElement("cardConteiner");

    let card = document.createElement("cards");

    for(const producto of listaProductos){

        let tarjeta = document.createElement("div");

        tarjeta.innerHTML= `
                            <h3> Producto: ${producto.nombre}<h3>
                            <p> $ ${producto.precio}<p>
        `
        card.appendChild(tarjeta);
    }

    contenedorCards.appendChild(card);

let lugarParaContenedor = document.querySelector(".catalogo");
lugarParaContenedor.appendChild(contenedorCards);

}


