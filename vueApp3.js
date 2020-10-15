

const initialData3 = {
            lista: [
                { contenido: 'contenido1', tipo:'A' },
                { contenido: 'contenido2', tipo:'A' },
                { contenido: 'contenido3', tipo:'B' },
                { contenido: 'contenido4', tipo:'A' },
                { contenido: 'contenido5', tipo:'B' }
            ],
            lista2: [
                { contenido: 'contenido1', tipo:'A' },
                { contenido: 'contenido2', tipo:'A' },
                { contenido: 'contenido3', tipo:'B' },
                { contenido: 'contenido4', tipo:'A' },
                { contenido: 'contenido5', tipo:'B' }
            ],

            persona:{
                nombre: 'Abel',
                apellido:'Carhuanca',
                usuario:'eliseoabelcarh'
            }
        }


const vue3 = new Vue({
    el: '#vue-app3',
    data() {
        return initialData3;

    },
    created:
        function () {
            console.log('created func')
        }
    ,
    methods: {
        addElemento:function(e){
            let i = this.lista.length;
            let dato ='contenido'+(i+1);
            vue3.$set(vue3.lista, i,{contenido: dato, tipo:'B'} )
            //this.lista.push({contenido: dato, tipo:'B'})

        },
        filtrarTipoA: function(){
            this.lista = this.lista.filter(function(item){
                return item.tipo.match(/A/)
            });
          
        }, 
        reset: function(){
            this.lista = [ ...this.lista2 ]
        }
    }
})