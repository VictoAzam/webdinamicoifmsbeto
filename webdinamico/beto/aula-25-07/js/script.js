// formas de declarar a variável
// const a = 1; // constante
// let b = 2; // variável
// d = 3;
// var c = 42; // legado

// caso verdadeiro
if (a === 3) {
  // 
} 
// caso falso
else {
  // 
}

let a = 123;
// apresentação dos resultados
console.log(a); // verificar dado
alert(a);
document.write(b);

// manipulação da DOM 
let c = document.getElementById('container');
let d = document.getElementsByClassName('menu');
let e = document.getElementsByTagName('h3');
let f = document.querySelector('#container');

console.log(c);
console.log(d);
console.log(e);

// estrutura de repetição
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

let h = 0;
do {
  console.log(h);
  h++;
} while (h < 10);

// funções
function soma(a, b) {
  console.log(a + b);
}
soma(5, 6);

let somaNova = new Function("a", "b", "return (b * h) / 2");

// objetos
let pessoas = {
  nome: "Jão",
  idade: 20,
  sexo: "M",
};

function dizerOi() {
  let nome = document.getElementById("nome").value;
  console.log(`oi, ${nome}`);


}
