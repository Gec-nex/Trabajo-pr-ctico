let nombre = prompt("Hola bienvenido a Super Sports el garage web, por favor escriba su nombre de usuario", "Usuario");
alert("Hola, " + nombre);

const apiUrl='https://api.thecatapi.com/v1/images/search';

fetch(apiUrl)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

btnCat.addEventListener('click', () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const catImgUrl = data[0].url;

        catImgContainer.style.backroundImage = `url('${catImgUrl}')`;
    })
    .catch(error => console.log(error));
});
