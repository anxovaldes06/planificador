import dayjs from "dayjs"
import "./style.css"



const boton = document.getElementById("anadir")
const texto = document.getElementById("texto")
const lista = document.getElementById("lista")

boton.addEventListener("click", guardarPlan)

function guardarPlan(){

    const fechaHoy = dayjs().format("DD/MM/YYYY HH:mm")
    const li = document.createElement("li")
    li.textContent = texto.value + " - " + fechaHoy
    lista.appendChild(li) 
    texto.value = ""
}