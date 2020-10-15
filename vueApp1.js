
const data = {
    name: 'Abel',
    valorBool: true,
    botonHabilitado: true,
    someLink: 'https://google.com'
}
  
  

new Vue({
    el: '#vue-app1',
    data (){
        return data
    },
    computed:{
        funcionComputada: function(){
            //función que la llamo por su nombre sin ejecutarla usando ()
            // se guarda en caché y no cada que renderiza la app
            return Date.now()
        }
    },
    methods: {
        showName: function () {
            return 'hola ' + this.name;
        },
        cambiarNombre: function () {
            const nameA = 'Samuel';
            const nameB = 'Abel';
            if (this.name === nameA) {
                this.name = nameB;
            } else {
                this.name = nameA;
            }
        },
        retornarValorBool: function () {
            return this.valorBool;
        }, retornarBotonHabilitado: function () {
            return this.botonHabilitado;
        },
        cambiarValorBool: function () {
            if(this.valorBool === true){
                this.valorBool = false;
            }else{
                this.valorBool = true;
            }
        }, 
        habilitarODeshabilitarBoton: function(){
            if(this.botonHabilitado === true){
                this.botonHabilitado = false;
            }else{
                this.botonHabilitado = true;
            }
        }
    }
});