let enlaces = document.querySelectorAll("a");

let lista = Array.from(enlaces).map(e => e.innerText);
console.log(lista);
