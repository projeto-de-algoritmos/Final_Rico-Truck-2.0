var tipo = 2;

export function changeTipo(newTipo) {
    tipo = newTipo;
}

class Item {
    constructor(nome, valor, peso) {
        this.nome = nome;
        this.valor = valor;
        this.peso = peso; 
    };
};

function addItem(nomes, valores, pesos) {
    let listItems = [];

    for(let i = 0; i < nomes.length; i++){
        let item = new Item(nomes[i], valores[i], pesos[i]);
        listItems.push(item);
    }
    return listItems;
}

const _mergeArrays = (a, b, tipo) => {
    const c = [];
    if(tipo === 1){
        while (a.length && b.length) {
            c.push(a[0].valor > b[0].valor ? b.shift() : a.shift());
        }
    } else if (tipo === 2){
        while (a.length && b.length) {
            c.push(a[0].peso > b[0].peso ? b.shift() : a.shift());
        }
    } else if (tipo === 3){
        while (a.length && b.length) {
            c.push(a[0].valor < b[0].valor ? b.shift() : a.shift());
        }
    } else {
        while (a.length && b.length) {
            c.push(a[0].peso < b[0].peso ? b.shift() : a.shift());
        }
    }
    while (a.length) {
        c.push(a.shift());
    }
    while (b.length) {
        c.push(b.shift());
    }
    return c;
  }
  
const mergeSort = (a) => {
    if (a.length < 2) return a;
    const middle = Math.floor(a.length / 2);
    const a_l = a.slice(0, middle);
    const a_r = a.slice(middle, a.length);
    const sorted_l = mergeSort(a_l);
    const sorted_r = mergeSort(a_r);
    return _mergeArrays(sorted_l, sorted_r, tipo);
}

export default function sortItens(nomes, valores, pesos) {
    var itemList = addItem(nomes, valores, pesos);
    itemList = mergeSort(itemList, tipo);
    return itemList
}