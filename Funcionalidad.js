// Solicitar nombre al usuario
let nombre = prompt("Hola bienvenido a Super Sports el garage web, por favor escriba su nombre de usuario", "Usuario");
alert("Hola, " + nombre);

// URL de la API de gatos
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

// Seleccionar elementos del DOM
const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

// Función para cargar imagen de gato
function loadCatImage() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Obtener URL de la imagen
        const catImgUrl = data[0].url;
        
        // Crear elemento de imagen
        const imgElement = document.createElement('img');
        imgElement.src = catImgUrl;
        imgElement.alt = 'Imagen de gato aleatorio';
        imgElement.style.maxWidth = '100%'; 
        
        // Limpia anterior y añade nueva imagen
        catImgContainer.innerHTML = '';
        catImgContainer.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error al cargar imagen de gato:', error);
        catImgContainer.innerHTML = 'No se pudo cargar la imagen';
    });
}

// Evento para botón de generar gato
btnCat.addEventListener('click', loadCatImage);

// Cargar imagen inicial al cargar la página
document.addEventListener('DOMContentLoaded', loadCatImage);