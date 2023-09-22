//Registrando el componente log
AFRAME.registerComponent('log',{
    schema:{
        message:{type: 'string', default: 'Hola, mundo'}
    },
    init: function(){
        console.log(this.data.message)
    },
});