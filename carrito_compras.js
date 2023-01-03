let productosEnCarro = localStorage.setItem("productos-en-carro");
productosEnCarro = JSON.parse(productosCarro);

const carroVacio = document.querySelector("#carro-vacio");
const contenedorCarroProductos = document.querySelector("#contenedor-carro-productos");
const carroComandos = document.querySelector("#carro-comandos");
const contendedorCarroComprado = document.querySelector("#contenedor-carro-comprado");


if (productosEnCarro) {

    carroVacio.classList.add("disabled");

    productosEnCarro.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("contendeor-carro-productos");
        div.innerHTML = `
            <div class="producto-en-carrito">
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <div class="nombre-product-carrito">
                    <p>Nombre</p>
                    <h3>${producto.titulo}/h3>
                </div>
                <div class="cantiad-product-carrito">
                    <p>Cantidad</p>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="precio-product-carrito">
                    <p>Precio</p>
                    <p>${producto.precio}</p>
                </div>
                <div class="subtotal-product-carrito">
                    <p>Subtotal</p>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button class="eliminar-product-carrito" id="${producto.id}">Eliminar pruductos</button>
            </div>
        `;

        contendedorCarroComprado.append(div);

    })

}else { 

}