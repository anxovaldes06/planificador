import { describe, expect, it } from "vitest";
import { formatearFecha } from "./utils";
import { calcularPeso } from "./utils";

describe("formatear fecha", () => {
  it("formatea correctamente una fecha simple", () => {
    const fecha = new Date(2026, 8, 21, 14, 33);
    const resultado = formatearFecha(fecha);
    expect(resultado).toBe("21/09/2026 14:33");
  });      
});


describe("calcular peso " , () => {
  it("calcula peso según minutos" , () => {
    let peso = calcularPeso(5);
    expect(peso).toBe("baja");
    peso = calcularPeso(13);
    expect(peso).toBe("media");
    peso=calcularPeso(54);
    expect(peso).toBe("alta");
  });
});