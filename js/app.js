let mybutton = document.querySelector(".topscroll");
// const bandera = document.querySelector('.eu');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

const listadoCursos = document.querySelector('.listado-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const crearCursos = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');

let llenarCarrito = [];

const notificar = document.querySelector('#notificacion');
// Funcion a ejecutar
ejecutarEventListener();
function ejecutarEventListener() {
  listadoCursos.addEventListener('click', agregarCursos);
  carrito.addEventListener('click', eliminarCurso);
  vaciarCarrito.addEventListener('click', () => {
    llenarCarrito = [];
    notificaciones(llenarCarrito.length);
    limpiarHTML();
  });
}

function agregarCursos(e) {
  e.preventDefault();
  if (e.target.classList.contains('boton-curso')) {
    console.log('presionó en el botón');
    const card = e.target.parentElement.parentElement;
    obtenerDatos(card);

  }
}

function eliminarCurso(e){
  if(e.target.classList.contains('eliminar-curso')) {
    const productoId = e.target.getAttribute('data-bs');
    
    llenarCarrito = llenarCarrito.filter( producto => producto.id !== productoId);

    insertarHTML();
  }
  
}

function obtenerDatos(e) {
  datos = {
    imagen: e.querySelector('img').src,
    nombre: e.querySelector('.card-body h3').textContent,
    precio: e.querySelector('.card-body .precio span').textContent,
    id: e.querySelector('.card-body .boton-curso').getAttribute('data-id'),
    cantidad: 1
  }
  const existe = llenarCarrito.some(producto => producto.id === datos.id);
  if (existe) {
    const nuevoArreglo = llenarCarrito.map(producto => {
      if (producto.id === datos.id) {
        producto.cantidad++;

        return producto;
      } else {
        return producto
      }
    });
    llenarCarrito = [...nuevoArreglo];
  } else {
    llenarCarrito = [...llenarCarrito, datos];
  }
  
  insertarHTML();

}

function insertarHTML() {
  limpiarHTML();

  llenarCarrito.forEach(producto => {
    const { imagen, nombre, precio, id, cantidad } = producto;
    const tr = document.createElement('TR');
    tr.innerHTML = `
        <td> <img href="#" src="${imagen}" width=100> </td>
        <td> ${nombre} </td>
        <td> ${precio} </td>
        <td> ${cantidad} </td>
        <td> <a href="#" class="btn btn-danger eliminar-curso" data-bs="${id}"> X </a> </td>
    `;

    crearCursos.appendChild(tr);
    console.log(crearCursos);
  });

  notificaciones(llenarCarrito.length);
}

function limpiarHTML() {
  crearCursos.innerHTML = '';
}

function notificaciones(e) {
  if (e < 1) {
    notificar.classList.remove('badge');
    notificar.classList.remove('rounded-pill');
    notificar.classList.remove('bg-danger');
    notificar.textContent = '';
  } else {
    notificar.classList.add('badge');
    notificar.classList.add('rounded-pill');
    notificar.classList.add('bg-danger');
    notificar.textContent = e;
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function () {
  document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
});


