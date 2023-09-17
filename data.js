document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    const boton = document.getElementById('boton');

    boton.addEventListener('click', (event) => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        event.preventDefault();

        const almacenados = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
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
        alert("Datos enviados al servidor")
       })
       .catch(error => {
        console.error ('Error al enviar los datos', error);
        alert("No fue posible contactar al servidor")
       });

    });
});