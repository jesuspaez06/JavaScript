let contador = {
       contador:0,

       get cantidadContador() {
        return this.contador;
    },

    set SumarContador(contador) {
        this.contador += contador;
    }

}
contador.SumarContador = 50
console.log(contador.cantidadContador)
contador.SumarContador= -10
console.log(contador.cantidadContador)