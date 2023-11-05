// Defini la funcion sePoneLaOlla, lacual recibe por parametro el string del dia de la semana. Esta funcion retorna "Pongamos la olla, hoy se come pastas!" si recibe por parametro el valor "Domingo", caso contrario "Mejor lo dejamos para el domingo"

function sePoneLaOlla(diaSemana) {
    if (diaSemana === "Domingo"){
        return ('Pongamos la olla, hoy se come pastas');
    }

    else { 
        return ("Mejor lo dejamos para el domingo") 
    }
}

//? Defini la funcion puedoIrAlBanco la cual, recibiendo dos parametros, el primero:
//? diaDelaSemana (string) y el segundo horaActual (number), debera retornar true,
//? solo si es posible ir al banco y que lo encontremos abierto.

// Los bancos estan abiertos de Lunes a Viernes entre las 10 y 15 horas

function puedoIrAlBanco(dia,hora){
    return( dia != "Domingo" && dia!="Sabado" && hora>=10 && hora<=15 == true) 
}


console.log(puedoIrAlBanco("Domingo",11));