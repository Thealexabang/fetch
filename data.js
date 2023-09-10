document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    const boton = document.getElementById('boton');

    boton.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        const almacenados = {
            nombre,
            apellido,
            fechaNacimiento
        };

        fetch ('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(almacenados)
        })
       .then(response => response.json())
       .then(almacenados =>{
        console.log('Respuesta Del Servidor', almacenados);
       })
       .catch(error => {
        console.error ('Error al enviar los datos', error);
       });

    });
});