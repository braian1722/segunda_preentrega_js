//declaro el arreglo
const productos = [
	{ 
		id:1,
		producto:"Remera git",
		modelo:"Mangas cortas",
		imagen:'img/remera1.jpg',
		alt:"remera de git color violeta",
		precio:12000
	},
    { 
		id:2,
		producto:"Remera sass",
		modelo:"Mangas cortas",
		imagen:"img/remera2.jpg",
		alt:"Remera de sass",
		precio:10000
	},
    { 
		id:3,
		producto:"Remera angular",
		modelo:"Mangas cortas",
		imagen:"img/remera3.jpg",
		alt:"Remra de angular",
		precio:11000
	},
    { 
		id:4,
		producto:"Remera node",
		modelo:"Mangas cortas",
		imagen:"img/remera4.jpg",
		alt:"Remera de nodejs",
		precio:16000
	},
    { 
		id:5,
		producto:"Remera html",
		modelo:"Mangas cortas",
		imagen:"img/remera5.jpg",
		alt:"Remera html griz",
		precio:12000
	}
]


// busqueda por numero de id mediante el metodo filter
function buscarPorId(){

    const buscar = parseInt(prompt("ingrese id del productos"))
    const buscarId = buscar;
    const resultadoBusqueda = productos.filter(producto => producto.id === buscarId);

    if (resultadoBusqueda.length > 0) {
        mostrarProducto(resultadoBusqueda[0]); 
    }else {
        alert("No se encontraron productos con el ID especificado.");
    }
}
//muestro el producto que seleciona el usuario
function mostrarProducto(producto){
    const contenedorProductos = document.getElementById("productos")
    const productoDiv = document.createElement("div");
    productoDiv.innerHTML = `<h3>${producto.producto} - ${producto.modelo}</h3>
                            <p>Precio: $${producto.precio.toFixed(2)}</p>
                            <img src="${producto.imagen}" alt="${producto.alt}" width="100">`

    contenedorProductos.appendChild(productoDiv);

}

// muestro todos un producto del arreglo por pantalla
function mostrarTodosLosProductos() {
    const contenedorResultado = document.getElementById("productos");
    contenedorResultado.innerHTML = '';

    productos.forEach(producto => {
        mostrarProducto(producto);
    });
}

function mostrarMenu() {
    const opcion = prompt("Seleccione una opción:\n1. Buscar por id\n2. Mostrar todos los productos");
    
    switch (opcion) {
        case '1':
            alert ("lista de productos\n1.Remera git\n2.Remera sass\n3.Remera angular\n4.Remera nodejs\n5.Remera html\n");
            buscarPorId();
            break;
        case '2':
            mostrarTodosLosProductos();
            break;
        default:
            alert("Opción no válida.");
    }
}

mostrarMenu();  



