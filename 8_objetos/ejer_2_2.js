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
    getCantidadContador() {
        return this.contador;
    }
    setContador(variable) {
        this.contador = variable;
    }
}
const micontador = new contador();

micontador.incrementar(30);
console.log(micontador.getCantidadContador())

micontador.setContador(0);

micontador.decrementar(30);
console.log(micontador.getCantidadContador())