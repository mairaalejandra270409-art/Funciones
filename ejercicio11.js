//El programa genera un número secreto entre 1 y 100. El usuario tiene máximo 7 intentos para
//adivinarlo. Después de cada intento, el programa dice si el número secreto es mayor o menor.

function generarNumeroSecreto() {
            return Math.floor(Math.random() * 100) + 1;
        }

        function evaluarIntento(intento, secreto) {
            if (intento === secreto) {
                return "correcto";
            } else if (intento > secreto) {
                return "mayor";
            } else {
                return "menor";
            }
        }

        const numeroSecreto = generarNumeroSecreto();
        let intentos = 0;
        let resultado = "";

        while (intentos < 7 && resultado !== "correcto") {
            intentos++;
            const intento = parseInt(prompt(`intento ${intentos} de 7, adivina el número:`));
            resultado = evaluarIntento(intento, numeroSecreto);

            if (resultado === "mayor") {
                console.log("El número secreto es menor");
            } else if (resultado === "menor") {
                console.log("El número secreto es mayor");
            }
        }

        if (resultado === "correcto") {
            console.log(`Adivinaste en ${intentos} intentos`);
        } else {
            console.log(`Perdiste, el número secreto era ${numeroSecreto}`);}