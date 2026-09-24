//Una empresa necesita calcular el salario semanal de N obreros. Leer N y luego las horas
//trabajadas de cada obrero.

function calhoraextra(horas){
    if (horas >40){
        return horas-40;
    } else{
    return 0;
}}

function calcularsalariosemanal(horas){
    let salario;
    if(horas <=40){
        salario = horas*12000;
    } else{
        let horasextra= calhoraextra(horas);
        salario= (40*12000)+(horasextra*15000);
    }
    return salario;
}

let cantidadobreros= Number(prompt("Cuantos obreros:"));
let totalNomina =0;
for (let i=1; i<= cantidadobreros; i++){
    let horas= Number(prompt("Horas obrero"+i+":"));
    let salario= calcularsalariosemanal(horas);

    console.log("Obrero" + i+ ":"+salario);
    totalNomina= totalNomina+salario;
}
console.log("Total nomina:"+ totalNomina);