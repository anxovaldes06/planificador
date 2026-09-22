import dayjs from "dayjs";

export function calcularPeso(minutos) {
  if (minutos < 10) {
    return "baja";
  }

  else if (minutos < 30) {
    return "media";
  }

  return "alta";
}

export function formatearFecha(fecha) {
  const fechaFormateada = dayjs(fecha).format("DD/MM/YYYY HH:mm");
  return fechaFormateada;
}
