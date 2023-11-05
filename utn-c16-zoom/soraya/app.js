//? localStorage: aunque cierres el navegador, se queda guardado. Salvo que borres la memoria cache
const saveUsernameButton = document.getElementById("saveUserName")
const usernameInput = document.getElementById("userNameInput")
const usernameDiv = document.getElementById("userNameDis")

//                                   evento
saveUsernameButton.addEventListener("click", () =>{
    const username = usernameInput.value;
    localStorage.setItem("username",username) // Lo guardamos en el Local Storage 
    usernameDiv.textContent = `Nombre del usuario ${username}`
})

//? Para ver si se guardo: Vas a aplication y vas a local storage.


//? sessionStorage: dura mientras el navegador este abierto
const saveLenguajeButton = document.getElementById("saveLenguaje")
const lenguajeInput = document.getElementById("lenguajeInput")
const lenguajeDiv = document.getElementById("lenguajeDis")

saveLenguajeButton.addEventListener("click", () => {
    const lenguaje = lenguajeInput.value;
    sessionStorage.setItem("lenguaje",lenguaje)
    lenguajeDiv.textContent = `El lenguahe es ${lenguaje}`
})
