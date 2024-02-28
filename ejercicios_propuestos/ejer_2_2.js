/*
Crea una clase Contador con los métodos para incrementar y decrementar el contador. 
La clase contendrá un constructor por defecto y los métodos getters y setters.
*/
class contador{
contador= 0
    constructor(){
    }
    incrementar(incrementador) {
        for(let i=0;i<incrementador;i++)this.contador+=2;        
    }
    decrementar(decrementador){
        for(let i=0;i<decrementador;i++)this.contador-=2;    
    }
    get cantidadContador() {
        return this.contador;
    }
    set establecercotador(variable) {
        this.contador = variable;
    }
}
const micontador = new contador();
micontador.incrementar(2);
console.log(micontador.cantidadContador)

micontador.establecercotador = 0;
micontador.decrementar(2);
console.log(micontador.cantidadContador)