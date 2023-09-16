
const userPerfil = document.getElementById("nombreGuardado")

const userName = localStorage.getItem("userName");



if (userName){userPerfil.textContent = `Bienvenid@ ${userName}`}
else {alert("No ha datos del usuario disponibles") }