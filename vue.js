new Vue({
    el: '#crud',
    data:{
        titulo: 'Lista de Tareas',
        datos: [ {nombre: 'Vue', prioridad: 'm'}],
        idea: '',
        tipo: ''
    },
    methods: {
       agregar: function(){
           this.datos.push(
               {nombre: this.idea, prioridad: this.tipo}
           )
           this.idea = ''
       },
       eliminar: function(index){
           this.datos.splice(index, 1)
       }

    },
})