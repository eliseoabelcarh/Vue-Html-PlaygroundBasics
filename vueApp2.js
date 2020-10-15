const initialData = {
    pregunta: '',
    respuesta: 'Escribe alguna pregunta...',
    apiURL: 'https://yesno.wtf/api',
    respuestaImagenURL: '',
    classObject: {
        'list-group-item': true,
        'd-flex': true,
        'justify-content-between': true,
        'align-items-center': true
    },
    classObject2: {
        'text-danger': false,
        'list-group-item-danger': false
    },
    contador1: 0,
    contador2: 0,
    sizeText: 13,
    stylesObjeto: {
        color: 'blue',
        fontSize: '13px'
    }
}
new Vue({
    el: '#vue-app2',
    data() {
        return initialData;
    },
    watch: {
        pregunta: function (nueva, vieja) {
            this.respuesta = 'Esperando que deje de escribir...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // más sobre la función _.debounce: https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getRespuesta, 500)
    },
    methods: {
        getRespuesta: function () {
            if (this.pregunta.indexOf('?') < 0) {
                this.respuesta = 'Las preguntas contienen un signo de interrogación al final'
                return
            }
            this.respuesta = 'Pensando...'
            let vm = this;

            axios.get(this.apiURL)
                .then(function (response) {
                    vm.respuesta = response.data.answer === 'yes' ? 'Sí' : 'No';
                    vm.respuestaImagenURL = response.data.image;
                })
                .catch(function (error) {
                    vm.respuesta = '¡Error! No se pudo alcanzar la API. ' + error
                })
        },
        toggleClassToDanger: function () {
            this.contador1++;
            if (this.classObject2['text-danger'] === true) {
                this.classObject2['text-danger'] = false;
                this.classObject2['list-group-item-danger'] = false
            } else {
                this.classObject2['text-danger'] = true;
                this.classObject2['list-group-item-danger'] = true
            }
        },
        incFont: function () {
            let arr = this.stylesObjeto['fontSize'].split('');
            let size = arr.length;
            let newSize = parseInt(arr.slice(0,size-2).join(''))
            newSize++;
            let newFontSize = newSize.toString()+'px';
            this.stylesObjeto['fontSize']=newFontSize;
        },
        decFont: function () {
            let arr = this.stylesObjeto['fontSize'].split('');
            let size = arr.length;
            let newSize = parseInt(arr.slice(0,size-2).join(''))
            newSize--;
            let newFontSize = newSize.toString()+'px';
            this.stylesObjeto['fontSize']=newFontSize;
        }
    }

})