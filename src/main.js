import "./style.css";
import { calcularPeso, formatearFecha } from "./utils";
import confetti from "canvas-confetti";

const appName = import.meta.env.VITE_APP_NAME ?? "planificador";
const appVersion = import.meta.env.VITE_APP_VERSION ?? "1.0.0";
const appEnvironment = import.meta.env.VITE_APP_ENV ?? "development";

console.log(`${appName} (${appEnvironment}) v${appVersion}`);

const scalar = 2;
const sausage = confetti.shapeFromText({ text: "🌭", scalar });

const lanzarConfeti = () => {
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.7 },
    shapes: [sausage],
    scalar,
  });
};

const boton = document.getElementById("anadir");
const texto = document.getElementById("texto");
const inputMin = document.getElementById("min");
const lista = document.getElementById("lista");

if (!boton || !texto || !inputMin || !lista) {
  throw new Error("Faltan los elementos del formulario del planificador.");
}

boton.addEventListener("click", guardarPlan);

function guardarPlan() {
  const tarea = texto.value.trim();

  if (!tarea) {
    texto.focus();
    return;
  }

  const minutos = inputMin.value;
  const peso = calcularPeso(minutos);

  const fechaHoy = formatearFecha(new Date());
  const li = document.createElement("li");
  li.textContent = `${tarea} - ${fechaHoy} - ${minutos} min , ${peso}`;
  lista.appendChild(li);
  texto.value = "";
  inputMin.value = "";
  texto.focus();
  lanzarConfeti();
}
