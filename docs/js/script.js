const form = document.getElementById('suscripcionForm');
const emailInput = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;

    // Aquí debes agregar el código para enviar el correo electrónico
    // Puedes usar una librería como EmailJS o hacer una petición a un servidor
    // con Node.js y un módulo como Nodemailer.

    // Ejemplo simplificado (no funcional sin un servidor):
    // fetch('/enviar-correo', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ email })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     mensaje.textContent = data.mensaje;
    // })
    // .catch(error => {
        // Manejar errores
    // });

    // Mostrar un mensaje al usuario
    mensaje.textContent = '¡Gracias por suscribirte!';
    emailInput.value = '';
});