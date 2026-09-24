//Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
//día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
//promedio en °C.

const dias = numero(prompt("Cuantos dias"));
let sumaTemperaturas =0;

for(let i=1; i<= dias; i++);
const celsius= number(prompt("Temperatura dia"+ i + "(°c):"));
const kelvin= celsius + 273.15;
const fahrenheit= (celsius*9)/5 +32;

sumaTemperaturas += celsius;
console.log("Dia" + i + ":" + celsius + "°C=, " + kelvin + "K=" + fahrenheit + "°F=");

if (dias > 0){
    const promedio = sumaTemperaturas / dias;
    console.log("Promedio:" + promedio + "°C");
}
