/*
Crea una clase Contador con los métodos para incrementar y decrementar el contador. 
La clase contendrá un constructor por defecto y los métodos getters y setters.
*/
class contador{
contador= 0
    constructor(){
    }
    incrementar(incrementador) {
    this.contador+=incrementador;        
    }
    decrementar(decrementador){
    this.contador-=decrementador;    
    }
    getcantidadContador() {
        return this.contador;
    }
    setcotador(variable) {
        this.contador = variable;
    }
}
const micontador = new contador();

micontador.incrementar(30);
console.log(micontador.getcantidadContador())

micontador.setcotador(0);

micontador.decrementar(30);
console.log(micontador.getcantidadContador())
