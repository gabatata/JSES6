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