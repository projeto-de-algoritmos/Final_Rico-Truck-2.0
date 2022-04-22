export default function knapsack({valores, pesos, maxWeight, setResult}){
    var W = maxWeight; // peso maximo da mochila
    var qtd_itens = valores.length; // quantidade total de itens

    var w = 0; //capacidade gradual

    var memoization = [[]]; //matriz de memorização [PROGRAMAÇÃO DINÂMICA]
    
    for (w = 0; w <= W; w++){
        memoization[w] = [0];
        for (var item = 1; item <= qtd_itens; item++){
            if (w >= pesos[item]){
                memoization[w][item] = Math.max(memoization[w][item-1], memoization[w - pesos[item]][item-1] + valores[item]);
            } else {
                memoization[w][item] = Math.max(memoization[w][item-1], 0);
            }
        }
    }
    setResult(memoization[W][qtd_itens]);
}