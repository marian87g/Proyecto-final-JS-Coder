// function Producto (nombre, stock, precio, iD, tipoDeComercio
//     ){
//     this.nombre = nombre;
//     this.stock = stock;
//     this.precio = precio;
//     this.iD = iD;
//     this.tipoDeComercio = tipoDeComercio

//     this.venta = function(cantidadComprada){
//         this.stock -= cantidadComprada
//         console.log("Queda disponible :" + this.stock + " " + "unidades de " + this.nombre);
//     }
// }


// const productoA = new Producto("Suprema de pollo", 15, 699, 1, "Casa de comidas" )
// const productoB = new Producto("Milanesa de ternera", 20, 599, 2, "Casa de comidas" )
// const productoC = new Producto("Porcion de papas fritas", 30, 399, 3, "Casa de comidas" )
// const productoD = new Producto("Porcion de pure de papas", 20, 299, 4, "Casa de comidas" )

// const listaProductos = [productoA, productoB, productoC, productoD]

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// guardarLocal("listaDeProductos", JSON.stringify(listaProductos));

// function menu(){
//     let opcion = prompt("Menu: \n1 - Ver productos\n2 - Saludar\nESC- Salir")

//     switch(opcion){
//         case "1":
//             listarProductos();
//             compraTotal();
//             break;
//         case "2":
//             saludar("Bienvenido a");
//             menu();
//             break;
//         case "ESC":
//             saludar("Gracias por visitar")
//             break;
//         default:
//             alert("Opcion Incorrecta")
//             menu()
//             break;
//     }
// }


// let contador = 0
// let listadoProductosMenu = "Estos son nuestros productos: "

// for(const producto of listaProductos){
//     contador++
//     listadoProductosMenu += "\n" + contador + "- " + producto.nombre
// }

// function listarProductos(){
//     alert(listadoProductosMenu)
// }



// function saludar(){
//     swal("Bienvenido!");
// }

// function stockInsuficiente(stock) {
//     alert("No tenemos unidades suficientes de ese producto, puede comprar hasta " + stock + " unidades")
// }

// function calcularPrecio(precio){
//     precioTotalVenta += cantidadComprada * precio;
// }

// let cantidadComprada;
// let precioTotalVenta = 0;

// function compra(stock, precio, producto) {
//     // cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
//     let texto = ''
//     let formulario = document.getElementById('formulario')
//     let input = document.getElementById('input')
//     formulario.addEventListener('submit', (e) => {
//     e.preventDefault()
//     texto = input.value
//     console.log('texto', texto)
//     })


//     if(cantidadComprada <= stock) {

//         calcularPrecio(precio)

//         producto.venta(cantidadComprada)

//     }
//     else {
//         stockInsuficiente(stock)
//     }
// }

// function compraTotal(){

//     let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos distintos a comprar"))

//     for (let i = 0; i < cantidadProductosComprados; i++){

//         let productoSeleccionado = prompt("Ingrese el nombre del producto que quiere comprar")

//         let productoBuscado = listaProductos.find(x => x.nombre == productoSeleccionado)

//         if(productoBuscado){

//         compra(productoBuscado.stock, productoBuscado.precio)

//         }
//         else{
//             alert("El producto ingresado no existe")
//         }

//     }

//     alert("El precio de su compra es de: $" + precioTotalVenta);

// }

// // menu()

// let boton1 = document.querySelector('.boton')

// boton1.addEventListener('click', renderProductos )

// function renderProductos() {
//     let contenedorCards = document.createElement("cardConteiner");

//     let card = document.createElement("cards");

//     for(const producto of listaProductos){

//         let tarjeta = document.createElement("div");

//         tarjeta.innerHTML= `
//                             <h3> Producto: ${producto.nombre}<h3>
//                             <p> $ ${producto.precio}<p>
//         `
//         card.appendChild(tarjeta);
//     }

//     contenedorCards.appendChild(card);

// let lugarParaContenedor = document.querySelector(".catalogo");
// lugarParaContenedor.appendChild(contenedorCards);

// }

const listaProductos = [
    {
        imagen:"./img/pasta1.jpg",
        nombre:"Pasta 1",
        precio: 800,
        categoria: {
            nombre: "Pastas",
            id: "pastas",
        },
        id:"pasta1",
    },
    {
        imagen:"./img/pasta1.jpg",
        nombre:"Pasta 2",
        precio: 800,
        categoria: {
            nombre: "Pastas",
            id: "pastas",
        },
        id:"pasta2",
    },
    {
        imagen:"./img/pasta1.jpg",
        nombre:"Pasta 3",
        precio: 800,
        categoria: {
            nombre: "Pastas",
            id: "pastas",
        },
        id:"pasta3",
    },
    {
        imagen:"./img/pasta2.jpg",
        nombre:"Salsa 1",
        precio: 800,
        categoria: {
            nombre: "Salsas",
            id: "salsas",
        },
        id:"salsa1",
    },
    {
        imagen:"./img/pasta2.jpg",
        nombre:"Salsa 2",
        precio: 800,
        categoria: {
            nombre: "Salsas",
            id: "salsas",
        },
        id:"salsa2",
    },
    {
        imagen:"./img/pasta2.jpg",
        nombre:"Salsa 3",
        precio: 800,
        categoria: {
            nombre: "Salsas",
            id: "salsas",
        },
        id:"salsa3",
    },
    {
        imagen:"./img/pasta2.jpg",
        nombre:"Postre 1",
        precio: 800,
        categoria: {
            nombre: "Postres",
            id: "postres",
        },
        id:"postre1",
    },
    {
        imagen:"./img/pasta2.jpg",
        nombre:"Postre 2",
        precio: 800,
        categoria: {
            nombre: "Postres",
            id: "postres",
        },
        id:"postre2",
    },
    {
        imagen:"./img/pasta2.jpg",
        nombre:"Postre 3",
        precio: 800,
        categoria: {
            nombre: "Postres",
            id: "postres",
        },
        id:"postre3",
    },
];

const vistaDeProductos = document.querySelector("#sector-productos");
const categoriasBotones = document.querySelectorAll(".boton-categoria");
let botonesComprar = document.querySelectorAll(".boton-comprar");
const numero = document.querySelector("#numero");

function renderProductos(seleccionProductos) {

    vistaDeProductos.innerHTML = "";

    seleccionProductos.forEach(producto => {       

        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="img-producto" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="card-producto">
                <h3 class="nombre-producto">${producto.nombre}</h3>
                <p class="detalle-producto"> Detalle <p/>
                <p class="precio-producto">$${producto.precio}</p>
                <button class="boton-comprar" id="${producto.id}">Agregar</button>
            </div>
        `;
        vistaDeProductos.append(div);
    })

    cargaBotonesComprar();
}

renderProductos(listaProductos);

categoriasBotones.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        
        if (e.currentTarget.id != "nuestros-productos") {
            const botonProducts = listaProductos.filter(producto => producto.categoria.id === e.currentTarget.id);
            renderProductos(botonProducts);
        } else {
            renderProductos(listaProductos);
        }     

    })
})

function cargaBotonesComprar() {
    botonesComprar = document.querySelectorAll(".boton-comprar");

    botonesComprar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarro);
    })
}

const productosCarro = [];

function agregarAlCarro(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = listaProductos.find(producto => producto.id === idBoton);

    if (productosCarro.some(producto => producto.id === idBoton)) {
        const indice = productosCarro.findIndex(producto => producto.id === idBoton);
        productosCarro[indice].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosCarro.push(productoAgregado);
    }

    cargarNumero();
    
    localStorage.setItem("productos-en-carro", JSON.stringify(productosCarro));
}

function cargarNumero() {
    let nuevoNum = productosCarro.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNum;
}