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

