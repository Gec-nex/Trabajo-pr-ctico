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

const correoInput = document.querySelector("#correo");
const mensaje1Correo = document.querySelector("#mensaje1");
const contraseñaImput = document.querySelector("#contraseña");
const mensaje2Contraseña = document.querySelector("#mensaje2");

correoInput.addEventListener('change', () => {
    if (correoInput.value.includes('@')){
        mensaje1Correo.textContent = 'Correo válido.';
        mensaje1Correo.style.color = 'green';
    }else{
        mensaje1Correo.textContent = 'Correo inválido.';
        mensaje1Correo.style.color = 'red'
    }
        
});

contraseñaImput.addEventListener('change', () => {
    if (contraseñaImput.value.trim().length > 4){
    mensaje2Contraseña.textContent = 'Clave válida.';
        mensaje2Contraseña.style.color = 'green';
    }else{
        mensaje2Contraseña.textContent = 'Clave inválida, debe tener mas de 4 caracteres.';
        mensaje2Contraseña.style.color = 'red';
    }
});

const formulario = document.querySelector("#Formulario");
const enviar = document.querySelector("#boton1");

boton1.addEventListener('click', (e) => {
 e.preventDefault();

 const correoValidar = document.querySelector("#correo").value;
 const contraseñaValidar = document.querySelector("#contraseña").value;
 const nombreValidar = document.querySelector("#nombre").value;

 if (correo && contraseña && nombre){
    mensaje3.textContent = `¡Formulario enviado con exito! bienvenido/a, ${nombre}`;
    mensaje3.style.color = 'green';
 }else{
    mensaje4.textContent = 'Por favor llena los campos vacíos.';
    mensaje4.style.color = 'red';
 }
});
