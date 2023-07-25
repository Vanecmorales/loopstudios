const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle (){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

// La ventaja de utilizar el método toggle está en colocar el nombre de la clase sin necesidad de utilizar condicionales para intercambiarlas por cada clic que el usuario dé sobre el botón que funcionará como un control toggle. Como a las clases se les pueden definir un conjunto de propiedades, entonces, podremos obtener el comportamiento esperado en función de lo que queramos mostrar al usuario cuando él interactúe con el objeto.