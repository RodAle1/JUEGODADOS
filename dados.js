//Código JavaScript

function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
   
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = Math.floor((Math.random()*7)); //usar random(1,6)
        this.jugador1.caraDado2 = Math.floor((Math.random()*7)); //usar random(1,6)

        this.jugador2.caraDado1 = Math.floor((Math.random()*7)); //usar random(1,6)
        this.jugador2.caraDado2 = Math.floor((Math.random()*7)); //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
                
            return this.jugador1.nombre;
            
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
              
            return this.jugador2.nombre;
        }
        else return "Empate";
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");

let juego1 = new JuegoDados(1, pedro, antonio);


let contj1=0;
let contj2=0;
let totju = 0;
while((contj1 !=3)&&(contj2 !=3)){
juego1.tirarDados();
let ganador = juego1.determinaGanador();

if (ganador==juego1.jugador1.nombre){
    contj1++;
    
}
else if(ganador==juego1.jugador2.nombre){
    contj2++;
}
totju++;
console.log ("el ganador de la ronda  "+juego1.numeroJuego+" es: "+ ganador);
juego1.numeroJuego++;
}
console.log("============================================================================================");
console.log(    "   ");
console.log("                               RESULTADOS DEL TORNEO                                        ");
console.log(    "   ");
console.log("============================================================================================");
if (contj1==3)
console.log("El ganador del torneo es "+ juego1.jugador1.nombre)
else if (contj2==3)
console.log("-->  "+"El ganador del torneo es "+ juego1.jugador2.nombre);

console.log("-->  "+"Se encontro al ganador del torneo en la ronda: "+ totju);




//Determinar el primer ganador de 3 juegos y cuantos juegos hubo
