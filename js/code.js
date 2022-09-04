//NUESTRO CODIGO JS
/*
function bienvenida() {
    let cookies= prompt("HOLA BIENVENIDO A TAKONES \n ¿Aceptas nuestras cookies para navegar? \n Presiona cualquier tecla para aceptar \n Presiona ESC para salir");
    if (cookies != "ESC") {
        console.log("Gracias por aceptar");
    }else{
        console.log("Hasta la proxima!")
    }
    //while (cookies != "ESC") {
    //    console.log("Gracias por aceptar");
    //    cookies= prompt("Otra vez");
    //}
}
bienvenida()
/*
const ESPACIO =" ";

function medidas(talle, sexo){
    //let talleYsexo= talle + ESPACIO + sexo;
    //console.log("PERFECTO, tenemos articulos disponibles para su talle y sexo: "+talleYsexo);
    console.log("PERFECTO, Tenemos arituclos disponibles para talla: "+talle +" y sexo: "+sexo);
}

let pedirTalle = parseInt(prompt("Ingrese su talle"));
let pedirSexo = prompt("Ingrese su sexo");

medidas(pedirTalle, pedirSexo);

*/

/*
function validacion(){
    let zapatos = prompt("Ingrese un color");
    while (zapatos == "Negro") {
        console.log("Hay stock");
        zapatos= prompt("Ingrese otro color");
    }
    zapatos= prompt("Ingrese otro color");
}

validacion()*/

//agregando arrays:
/*
const zapato1 = {
    marca: "Hush Puppie",
    modelo: "Kallay",
    codigo: 46486,
}

const zapato2 = {
    marca: "CAT",
    modelo: "Rocky",
    codigo: 78986,
}

const zapatos = [
    zapato1,
    zapato2,
    {
        marca: "Stork Man",
        modelo: "Template",
        codigo: 55458,
    }
]

zapatos.push({
    marca: "Timberland",
    modelo: "Whollek",
    codigo: 89884,
})

console.table(zapatos)


let aBuscar = prompt("Ingresa un modelo");
let posicion = zapatos.indexOf(aBuscar);
if (posicion != -1){
    alert(aBuscar + " esta disponible");
}else{
    alert("No hay");
}*/

/*
const zapatos = [
    {
        codigo: 22654,
        marca: "timberland",
        modelo: "roller"
    },
    {
        codigo: 65498,
        marca: "cat",
        modelo: "wallop"
    },
    {
        codigo: 48685,
        marca: "stork Man",
        modelo: "rocky"
    },
    {
        codigo: 45677,
        marca: "hush Puppies",
        modelo: "clowwell"
    },
    {
        codigo: 74545,
        marca: "cat",
        modelo: "patzi"
    },
    {
        codigo: 11238,
        marca: "timberland",
        modelo: "firemol"
    }
]
*/




/*const bienvenida = prompt("Hola, por favor indicanos tu sexo \n Presiona M si eres hombre \n Presiona F si eres mujer");
if (bienvenida == "M") {
    console.log("Bienvenido a Takones");
}else if (bienvenida == "F"){
    console.log("Bienvenida a Takones")
}else{
    while (bienvenida != "M", "F") {
        let segundoIntento = prompt("Por favor, ingrese M (masculino) o F (femenino)")
        if (segundoIntento == "M") {
            console.log("Bienvenido a Takones");
        }else if (segundoIntento == "F"){
            console.log("Bienvenida a Takones");
        }
        bienvenida = prompt("Ingresa otro dato:");
    }
}*/
/*
const bienvenida = prompt("Hola, por favor indicanos tu sexo \n Presiona M si eres hombre \n Presiona F si eres mujer \n Escribe ESC para salir");
while (bienvenida != "ESC") {
    if (bienvenida == "M") {
        console.log("Bienvenido a Takones");
    }else if(bienvenida == "F"){
        console.log("Bienvenida a Takones");
    }else{
        console.log("Ningun valor ingresado, por favor intentelo de nuevo")
    }
    bienvenida = prompt("Por favor ingrese M (masculino) o F (femenino)");
}
*/

/*function Zapatos(marca, modelo, codigo) {
    this.marca = marca;
    this.modelo = modelo;
    this.codigo = codigo;
}

const zapato1 = new Zapatos("timberland", "roller", 22654);
const zapato2 = new Zapatos("cat", "wallop", 65498);
const zapato3 = new Zapatos("stork man", "rocky", 48685);
const zapato4 = new Zapatos("hush puppie", "clowwell", 45677);
const zapato5 = new Zapatos("cat", "patzi", 74545);
const zapato6 = new Zapatos("timberland", "firemol", 11238);

//console.table(zapato2)

const zapatos = [
    {
        codigo: 22654,
        marca: "timberland",
        modelo: "roller",
        precio: 20000,
        imagen: "./image/woman-posing-with-stylish-footwear-summer-fashion-and-bag.jpg"
    },
    {
        codigo: 65498,
        marca: "cat",
        modelo: "wallop",
        precio: 18000,
        imagen: "./image.logo.png"
    },
    {
        codigo: 48685,
        marca: "stork Man",
        modelo: "rocky",
        precio: 17400,
        imagen: "./image.logo.png"
    },
    {
        codigo: 45677,
        marca: "hush Puppies",
        modelo: "clowwell",
        precio: 22000,
        imagen: "./image.logo.png"
    },
    {
        codigo: 74545,
        marca: "cat",
        modelo: "patzi",
        precio: 25500,
        imagen: "./image.logo.png"
    },
    {
        codigo: 11238,
        marca: "timberland",
        modelo: "firemol",
        precio: 20500,
        imagen: "./image.logo.png"
    }
]

const zapateria = [
    {zapato1},
    {zapato2},
    {zapato3},
    {zapato4},
    {zapato5},
    {zapato6}
];

console.log(zapateria)
/*
zapatos.forEach(zapato=>console.log(zapato.marca));

zapatos.forEach((zapato) => {
    console.log(zapato.marca);
});


const buscarMarca = prompt("Ingrese una marca");

const resultado = zapatos.find((zapato)=>zapato.marca === buscarMarca);
console.log(resultado);

const resultado2 = zapatos.filter((zapato)=>zapato.marca === buscarMarca);
console.log(resultado2);
*/
/*
let carrito = document.getElementById("sale");
carrito.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${zapatos[0].imagen}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title">${zapatos[0].marca}</h3>
                <p class="card-text">${zapatos[0].codigo}</p>
                <p class="card-text">$ ${zapatos[0].precio}</p>
                <a href="#" id="miBoton" class="btn btn-primary">Comprar</a>
            </div>
        </div>
`;

/*let miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", interactuar);

function interactuar(){
    alert ("Felicidades, compraste el prodcuto")
};*/

//clase para crear zapatos
class Zapatos{
    constructor(imagen, codigo, marca, modelo, precio){
        this.imagen = imagen,
        this.codigo = codigo,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
}

//array para guardar los zapatos creados
const elementosCarrito = [];

const zapateria = [];
console.log(zapateria)

const contenedorCatalogo = document.getElementById("sale");
//zapatos
function cargarZapatos() {
    zapateria.push(new Zapatos("./image/woman-posing-with-stylish-footwear-summer-fashion-and-bag.jpg", 56445, "CATERPILLER", "ROCKY", "$22.000"));
    zapateria.push(new Zapatos("./image/woman-posing-with-stylish-footwear-summer-fashion-and-bag.jpg", 46545, "TIMBERLAND", "PATZI", "$16.000"));
    zapateria.push(new Zapatos("./image/woman-posing-with-stylish-footwear-summer-fashion-and-bag.jpg", 24556, "HUSH PUPPIE", "WELLER", "$19.000"));
    zapateria.push(new Zapatos("./image/woman-posing-with-stylish-footwear-summer-fashion-and-bag.jpg", 11379, "STORK MAN", "STARK", "$24.500"));
    zapateria.push(new Zapatos("./image/woman-posing-with-stylish-footwear-summer-fashion-and-bag.jpg", 98975, "CATERPILLER", "LANNISTER", "$29.000"));
    zapateria.push(new Zapatos("./image/woman-posing-with-stylish-footwear-summer-fashion-and-bag.jpg", 23987, "TIMBERLAND", "VELVET", "$20.000"));
}

cargarZapatos()
cartasCatalolgo();



function dibujarCarrito() {
    let renglonesCarrito = '';

    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+=`
                <tr>
                    <td>${elemento.zapato.codigo}</td>
                    <td>${elemento.zapato.marca}</td>
                    <td>${elemento.zapato.modelo}</td>
                    <td>$ ${elemento.zapato.precio}</td>
                </tr>
            `;
        }
    );

}

//crear cartasCatalogo:
function cartasCatalolgo(zapato) {
    //boton comrpar:
    let botonComprar = document.createElement("button");
    botonComprar.className = "btn btn-success";
    botonComprar.innerText = "Comprar";

    //cuerpo:
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h4>${zapato.modelo}</h4>
        <h5>${zapato.marca}</h5>
        <p>$ ${zapato.precio} USD</p>
    `;
    cuerpoCarta.append(botonComprar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = zapato.imagen;
    imagen.className = "card-img-top";
    imagen.alt = zapato.modelo;

    //Carta
    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    //Contenedor Carta
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);

    //Agregar algunos eventos
    botonAgregar.onclick = () => {
        Swal.fire(
            'Good job!',
            'Agregaste ${zapato.modelo] al Carrito',
            'success'
        )

        let elementoCarrito = new ElementoCarrito(producto, 1);
        elementosCarrito.push(elementoCarrito);

        dibujarCarrito();

    } 

    return contenedorCarta;
}

function dibujarCatalogo() {
    contenedorCatalogo.innerHTML = "";

    zapateria.forEach(
        (zapato) => {
            let contenedorCarta = crearCard(zapato);
            contenedorCatalogo.append(contenedorCarta);
        }
    );

}


