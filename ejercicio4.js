//Una persona invierte su dinero en un banco que paga 2% de interés mensual. La ganancia de
//cada mes se reinvierte. Leer el capital inicial y la cantidad de meses. Mostrar el saldo al final de
//cada mes y la ganancia total.

const capitalInicial = Number(prompt("Capital inicial:"));
const meses = Number(prompt("Número de meses:"));
let saldoActual = capitalInicial;

for (let i = 1; i <= meses; i++) {
  const gananciaMes = saldoActual * 0.02;
  saldoActual += gananciaMes;
  console.log("Mes " + i + ": " + saldoActual);
}

const gananciaTotal = saldoActual - capitalInicial;
console.log("Ganancia total: " + gananciaTotal);