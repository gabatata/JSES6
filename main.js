//lazy evaluation
function randomNumber(){
    console.log('Gerando um numero aleatorio');
    return Math.random() * 10;
}
function mult(a,b=randomNumber()){
    return a*b;
}
console.log(mult(5,2))
console.log(mult(5))

//object literals
var prop1 = 'Gabriel';
var obj = {
    prop1
};
console.log(obj);

function method1(){
    console.log('method called');
}
var obj2={
    method1
};
obj2.method1();

var obj3 = {
    sum: function sum(a,b){
    return a + b;
}
};
console.log('obj3 = ' + obj3.sum(2,5));

//rest e spread operator

function sum(...args){
    return args.reduce((acc, value) => acc + value,0);

};
console.log(sum(2,3,4,5,6));

const sum = (a,b,...rest) => {
    console.log(a,b, rest);
    
};
const mult = (...args) => args.reduce((acc,value) => acc*value, 1);
const sum2 = (...rest) => {
    return mult(...rest);
}

console.log(sum2(5,5,2,2,1));

//strings, arrays, literal objects e objetos iteraveis

const str = 'Gabriel';
const arr = [1,2,3,4]
function logArgs(){
    console.log(arguments);

};
const arr2 = [...arr,5,6,7]
logArgs(...str);
logArgs(...arr);
console.log(arr2);

//destructuring assignment
var [maca2, banana2, laranja2] = ['Maçã', 'Banana', 'Laranja'];
console.log(maca2);
var obj = { 
    nome: 'Gabriel', props: { age: 27}
};
var {nome} = obj;
console.log(nome);

//Symbols - simbolos tem id unico

const uniqueId = Symbol('oi');

console.log(uniqueId)

//well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4];
const str = 'Gabriel'
const it= arr[Symbol.iterator]();
//forma antiga
while (true) {
    let { value , done} = it.next();

    if (done){ break;}


console.log(value);
}
//formas mais simples
for (let value of arr){
    console.log(value);
}

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
let i = 0;
return {
    next: () => {
        i++;
        return {
            value: this.values[i - 1],
            done: i > this.values.length
        };
    }
};
    }
};

const it = obj[Symbol.iterator]();
console.log("teste 1:")
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let value of obj) {
    console.log("teste 2: " + value);
}

const arr2 = [...obj];

console.log("teste 3: " + arr2);

// generators - controla o fluxo da função

function* hello() {
    console.log ('hello');
    yield 1;
    console.log ('from');
    yield 2;
    console.log ('function');
   
}
const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());


function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){
for (var i = 0; i < this.values.length; i++){
    yield this.values[i];
}
        }
    }
for (let value of obj) {
    console.log(value);
}

//Promisses e fetchs
const myPromisse = new Promise((resoolved, reject) =>{
    //
});
//Callbacks para tarefas sincronas após algo ser executado
const façaIssoPromisse = () =>
new Promise((resolved, reject) =>{
    
            setTimeout(function(){
                // fez algo
            resolved('First data');
        }, 1000);
        });
    
        const façaOutraPromisse = () => 
        new Promise((resolved, reject) =>{
            setTimeout(function(){
                // fez algo
            resolved('Second data');
        }, 1000);
        });

        façaIssoPromisse()
        .then(data => {console.log(data);
             return façaOutraPromisse();
            })
        .then(data2 => console.log(data2))
        .catch(error => console.log('ops', error));

        // outra forma
        Promise.all([façaIssoPromisse(), façaOutraPromisse()])
        .then(data => {
console.log(data);
        })
        //#STATUS: Pending - está em execução
        //Fulfilled - terminou de executar
        //Rejected - aconteceu algum erro
        
//forma antiga
function façaIsso(callback) {
    setTimeout(function(){
        //fez algo
        callback('First data');
    }, 1000);
    }

    function façaOutraCoisa(callback) {
        setTimeout(function(){
            //fez algo
            callback('Second data');
        }, 1000);
        }

        function fazTudo(){
            try{
            façaIsso(function(data){
                var processedData = data.split('');
                try{
                façaOutraCoisa(function(data2){
                    var processedData2 = data2.split('');

                    setTimeout(function(){
                        console.log(processedData, processedData2);
                    }, 1000);
                    });
                } catch(err){
                    //handle error
                }
                });
            } catch(err){
                // handle error
            }
                   }
                   fazTudo();

//Fetch

fetch('http://localhost:8080/data.json').then(responseStream => {
    if (responseStream.status === 200){
        return responseStream.json();
    } else {
        throw new Error('Erro de pedido');
    }
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('ERROR: ', err);
});

//ES7 - Async - transforma função em uma promisse/ Await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json())
    return data;
};


simpleFunc().then(data => {
console.log(data);
}).catch(err => {
    console.log(err);
});

//EventEmitter - exclusivo do node

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'Gabriel Santos'});