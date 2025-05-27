var notificacion = document.getElementById("notificacion-portapapeles");
const gmail = document.getElementById('Email');

gmail.addEventListener("click", event => {
    navigator.clipboard.writeText("julioantperez08@gmail.com");
    
    notificacion.textContent = "El gmail se ha copiado exitosamente en el portapapeles.";
    
    notificacion.classList.add('show');
    
    setTimeout(() => {
        notificacion.classList.remove('show');
    }, 3000); 
});


