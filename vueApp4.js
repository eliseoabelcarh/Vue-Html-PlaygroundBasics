const vue4 = new Vue({
    el: '#vue-app4',
    data(){
        return {
            tareas:['tarea1'],
            tareaNueva: '',
            contador: 1, 
            nombresLista:[]
           
        }
    },
    methods:{
        addTarea:function(){
            if(this.tareaNueva===''){
                return
            }
            this.tareas.push(vue4.tareaNueva);
            this.tareaNueva= '';
        },
        removeTarea: function(index){
            this.tareas.splice(index, 1)
        }
    }
})