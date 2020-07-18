//const { component } = require("vue/types/umd");



var app = new Vue({
    el: '#app',
    data: {
        contador: 0,
        titleExecice4: 'propiedades computadas',
        tareas: [],
        nuevaTarea: '',
        TituloExample3: "GYM",
        titulo: 'Hello Vue!',
        frutas: ['A', 'B', 'C'],
        aregloObjetos: [
            { name: "A", cantidad: 20 },
            { name: "B", cantidad: 0 },
            { name: "C", cantidad: 40 }
        ],
        nuewFruit: '',
        cantidaFruit: 0,
        totalFutas: 0,
        fondo: "bg-dark",
        color: true
    },
    methods: {
        addFruit() {
            this.aregloObjetos = [...this.aregloObjetos, { name: this.nuewFruit, cantidad: this.cantidaFruit }];
        },
        addTarea() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            this.updategymDB();
        },
        editartarea(item) {
            console.log(item);
            this.tareas[item].estado = !this.tareas[item].estado;
            this.updategymDB();
        },
        deleteTarea(index) {
            this.tareas.splice(index, 1);
            this.updategymDB();
        },
        updategymDB: function () {
            localStorage.setItem("gymDB", JSON.stringify(this.tareas));
        }
    },
    computed: {        
        color4() {
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20,
            }
        },
        sumarFrutas() {
            this.totalFutas = 0;
            this.aregloObjetos.forEach(i => {
                this.totalFutas += i.cantidad;
            });
            return this.totalFutas;
        },
        invertido() {
            return this.titleExecice4.split('').reverse().join('');
        }
    },
    created() {
        console.log("created");
        let datosDB = JSON.parse(localStorage.getItem('gymDB'));
        if (datosDB == null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeDestroy(){
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    },

});



let btnExample1 = document.getElementById("btnExample1");
let divexample1 = document.getElementById("example1");
let btnExample2 = document.getElementById("btnExample2");
let divexample2 = document.getElementById("example2");
let btnExample3 = document.getElementById("btnExample3");
let divexample3 = document.getElementById("example3");
let btnExample4 = document.getElementById("btnExample4");
let divexample4 = document.getElementById("example4");

btnExample1.addEventListener('click', function () {
    divexample1.style.display = "block";
    divexample2.style.display = "none";
    divexample3.style.display = "none";
    divexample4.style.display = "none";
});
btnExample2.addEventListener('click', function () {
    divexample1.style.display = "none";
    divexample2.style.display = "block";
    divexample3.style.display = "none";
    divexample4.style.display = "none";
});
btnExample3.addEventListener('click', function () {
    divexample1.style.display = "none";
    divexample2.style.display = "none";
    divexample3.style.display = "block";
    divexample4.style.display = "none";
});
btnExample4.addEventListener('click', function () {
    divexample1.style.display = "none";
    divexample2.style.display = "none";
    divexample3.style.display = "none";
    divexample4.style.display = "block";
});