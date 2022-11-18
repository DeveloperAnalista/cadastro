let lista = document.getElementById("lista");
console.log(lista.hasChildNodes());
let filhos = lista.children;
for(let filho of filhos){
    console.log(filho.tagName)
}
let novoItem = document.createElement('li');
novoItem.innerHTML = "Utensilhos Cozinha";
lista.appendChild(novoItem);
let item = document.getElementById("item");
console.log(item.nextElementSibling);
console.log(item.previousElemetsibling);
console.log(item.parentElement);
var excluir = filhos[0];
lista.removechild(excluir);