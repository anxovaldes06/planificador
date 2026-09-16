const boton = document.getElementById("anadir")
const texto = document.getElementById("texto")
const lista = document.getElementById("lista")

boton.addEventListener("click", guardarPlan)

function guardarPlan(){
    const ahora = new Date()
    const pad = valor => String(valor).padStart(2, "0")
    const fechaHoy = `${pad(ahora.getDate())}/${pad(ahora.getMonth() + 1)}/${ahora.getFullYear()} ${pad(ahora.getHours())}:${pad(ahora.getMinutes())}`
    const li = document.createElement("li")
    li.textContent = texto.value + " - " + fechaHoy
    lista.appendChild(li)
    texto.value = ""
}