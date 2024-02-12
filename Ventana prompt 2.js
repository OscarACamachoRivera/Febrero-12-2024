var confirmacion = window.confirm("¿Quiere suscribirse al canal de TodoCode?");

if (confirmacion == true) {
    alert("MUCHAS GRACIAS POR SUSCRIBIRTE. ¡SOS UN/A CRACK!");
} else {
    alert("Gracias por nada. ¡Hasta luego!");
}

// Additional code to display the user's response
var respuesta = confirmacion ? "Sí" : "No";
alert("Su respuesta fue " + respuesta);
