const saveUsernameButton = document.getElementById("saveUserName")
const usernameInput = document.getElementById("userNameInput")
const usernameDiv = document.getElementById("userNameDis")

// Colocamos eventos a las const

saveUsernameButton.addEventListener("click", () =>{
    const username = usernameInput.value;
    localStorage.setItem("username",username)
    usernameDiv.textContent = `Nombre del usuario ${username}`
})


const saveLenguajeButton = document.getElementById("saveLenguaje")
const lenguajeInput = document.getElementById("lenguajeInput")
const lenguajeDiv = document.getElementById("lenguajeDis")



saveLenguajeButton.addEventListener("click", () => {
    const lenguaje = lenguajeInput.value;
    sessionStorage.setItem("lenguaje",lenguaje)
    lenguajeDiv.textContent = `El lenguahe es ${lenguaje}`
})
