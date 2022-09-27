//STOCK:
const stockProductos = [
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "1356", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "2388", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "6856", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "4356", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "2226", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "1010", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "2796", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "5577", cantidad: 1},
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "1406", cantidad: 1}
]


const catalogo = document.getElementById("catalogo");

let carritoDeCompras = [];

stockProductos.forEach((producto)=>{
    let div = document.createElement("DIV")
    div.classList.add("catalogo__productos")
    div.innerHTML = `
    <img src= ${producto.img} class="catalogo-imagen"alt="">
    <div class: "catalogo-info">
    <h3>${producto.modelo.toLocaleUpperCase()}</h3>
    <h5>${producto.marca}</h5>
    <p>Precio: ${producto.precio}</p>
    <button id="comprar-${producto.id}" class="boton-comprar">COMPRAR</button>
    </div>
    `
    catalogo.appendChild(div);

    const boton = document.getElementById(`comprar-${producto.id}`)
    boton.addEventListener("click", ()=> {
        agregarAlCarrito(producto.id)
    });
    
})


const agregarAlCarrito = (productoId) => {
    const existe = carritoDeCompras.some(producto => producto.id === productoId)
    if (existe){
        const producto = carritoDeCompras.map(producto => {
            if(producto.id === productoId){
                producto.cantidad++
            }
        })
    }else{
        const item = stockProductos.find((producto)=> producto.id === productoId)
        carritoDeCompras.push(item)
        console.log(carritoDeCompras);
    }
    actualizarCarrito();
    
} 

const carrito = document.getElementById("containCarrito");
const precioTotal = document.getElementById("precioTotal");

document.addEventListener("DOMContentLoaded", () =>{
    if (localStorage.getItem("carritoDeCompras")){
        carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"))
        actualizarCarrito()
    }
})

const actualizarCarrito = () =>{
    carrito.innerHTML = "";
    carritoDeCompras.forEach((producto) => {
        const div = document.createElement("DIV");
        div.className = ("productoCarrito");
        div.innerHTML = `
        <p>Nombre: ${producto.modelo}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad"> ${producto.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        `

        carrito.appendChild(div);

        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
    })

    precioTotal.innerText = carritoDeCompras.reduce((acumulador, producto) => acumulador + producto.precio, 0)
}

const eliminarDelCarrito = (productoId) => {
    let item = carritoDeCompras.find((producto)=>producto.id === productoId)
    let indice = carritoDeCompras.indexOf(item)
    carritoDeCompras.splice(indice, 1)
    actualizarCarrito();
}

const botonVaciar = document.getElementById("botonVaciar");
botonVaciar.addEventListener("click", ()=>{
    carritoDeCompras.length = 0;
    actualizarCarrito();
})


