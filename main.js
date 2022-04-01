/*MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
 il testo digitato viene letto e utilizzato per creare un nuovo todo, 
 che quindi viene aggiunto alla lista dei todo esistenti. */

var app=new Vue(
    {
        el:'#root',
        data: {
            newTodo:'',
            todo: [
                {
                    text:'Fare i compiti',
                    done: false
                },
                {
                    text:'Fare la spesa',
                    done: true
                },
                {
                    text:'Fare il bucato',
                    done: false
                },
            ]
        },
        methods: {
            done:function(element){
                if(element.done==true){
                    element.done=false
                }else{
                    element.done=true
                }
            },
            removeTodo:function(todo, index){
                this.todo.splice(index, 1)
            },
            addTodo:function(){
                let oggettoTd={
                    text: this.newTodo,
                    done:false,
                }
                if(!this.newTodo==''){
                    this.todo.push(oggettoTd);
                    this.newTodo=''
                }
            }
        }
    }
);