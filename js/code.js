//STOCK:
const stockProductos = [
    {marca: "Caterpiller", modelo: "Swensea", precio: 40000, img: "./image/borBerlina.jpg", id: "1356", cantidad: 1},
    {marca: "Lady Stork", modelo: "Polard", precio: 35000, img: "./image/borcegoBlanco.jpg", id: "2388", cantidad: 1},
    {marca: "Timberland", modelo: "Chelsea", precio: 42000, img: "./image/borChelseaHombre.jpg", id: "6856", cantidad: 1},
    {marca: "Caterpiller", modelo: "Colorado", precio: 40500, img: "./image/borColoradoHombre.jpg", id: "4356", cantidad: 1},
    {marca: "Hush Puppie", modelo: "Dina", precio: 33500, img: "./image/borDina.jpg", id: "2226", cantidad: 1},
    {marca: "Caterpiller", modelo: "Founder", precio: 37000, img: "./image/borFounderHombre.jpg", id: "1010", cantidad: 1},
    {marca: "Hush Puppie", modelo: "Kelton", precio: 44000, img: "./image/borKeltonHombre.jpg", id: "2796", cantidad: 1},
    {marca: "Timberland", modelo: "Molly", precio: 40000, img: "./image/borMolly.jpg", id: "5577", cantidad: 1},
    {marca: "Merrel", modelo: "Segre", precio: 39500, img: "./image/borSegreHombre.jpg", id: "1406", cantidad: 1}
]

//DIBUJAMOS EL CATALOGO:
let precioVenta;

const catalogo = document.getElementById("catalogo");

stockProductos.forEach((producto)=>{
    let div = document.createElement("DIV")
    div.classList.add("catalogo__productos")
    div.innerHTML = `
    <img src= ${producto.img} class="catalogo-imagen"alt="">
    <div class: "catalogo-info">
    <h3>${producto.modelo.toLocaleUpperCase()}</h3>
    <h5>${producto.marca}</h5>
    <p>Precio: ${producto.precio}</p>
    <p>Precio Dolar: ${producto.precio / precioVenta}
    <button id="comprar-${producto.id}" class="boton-comprar">COMPRAR</button>
    </div>
    `
    catalogo.appendChild(div);

    //AGREGAMOS AL CARRITO
    const boton = document.getElementById(`comprar-${producto.id}`)
    boton.addEventListener("click", ()=> {
        agregarAlCarrito(producto.id)
        Swal.fire(
            '',
            'Felicitaciones, agregaste el producto al carrito',
            'success'
        )
    });
})

//API DE DOLAR, PRECIO DOLAR PARA CATALOGO

async function valorDolar(){
    const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/dolarblue"
    const resp = await fetch(URLDOLAR)
    const data = await resp.json()
    precioVenta = data.venta;
}

//DIBUJAMOS EL CARRITO :
let carritoDeCompras = [];

const carrito = document.getElementById("containCarrito");
const precioTotal = document.getElementById("precioTotal");

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

const actualizarCarrito = () =>{
    carrito.innerHTML = "";
    carritoDeCompras.forEach((producto) => {
        const div = document.createElement("DIV");
        div.className = ("productoCarrito");
        div.innerHTML = `
        <p>Nombre: ${producto.modelo}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad"> ${producto.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${producto.id})"><i id="botonEliminarCarrito" class="fa-solid fa-trash"></i></button>
        `

        carrito.appendChild(div);

        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
    })

    precioTotal.innerText = carritoDeCompras.reduce((acumulador, producto) => acumulador + producto.precio, 0)
}

//ELIMINAR Y VACIAR CARRITO:

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

//LOCAL STORAGE CARRITO:

document.addEventListener("DOMContentLoaded", () =>{
    if (localStorage.getItem("carritoDeCompras")){
        carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"))
        actualizarCarrito()
    }
})







