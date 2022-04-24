const ajustarGrafo = (grafo) => {
  const aux = {};
  Object.keys(grafo).forEach((k) => {
    const obj = grafo[k];
    const arr = [];
    Object.keys(obj).forEach((vert) => arr.push({ vertice: vert, custo: obj[vert] }));
    aux[k] = arr;
  });
  return aux;
};

const traceCaminho = (tabela, inicio, final) => {
  var caminho = []; var prox = final;
  while (true) {
    caminho.unshift(prox);
    if (prox === inicio) {
      break;
    }
    prox = tabela[prox].vertice;
  }
  return caminho;
};

export default function dijkstra (graph, inicio, final, setMenorDistancia, setCaminho, setResult) {
  var map = ajustarGrafo(graph);
  var menoresDistancias = { [inicio]: { vertice: inicio, custo: 0 } };
  var naoVisitado = [inicio];
  var visitado = [];
  var vertice;
  while ((vertice = naoVisitado.shift())) {
    var vizinhos = map[vertice].filter((i) => !visitado.includes(i.vertice));
    naoVisitado.push(...vizinhos.map((i) => i.vertice));
    var custoTovertice = menoresDistancias[vertice].custo;
    for (let { vertice: to, custo } of vizinhos) {
      var currcustoToVizinho = menoresDistancias[to] && menoresDistancias[to].custo;
      var novoCustoToVizinho = custoTovertice + custo;
      if (
        currcustoToVizinho == undefined ||
        novoCustoToVizinho < currcustoToVizinho
      ) {
        menoresDistancias[to] = { vertice, custo: novoCustoToVizinho };
      }
    }
    visitado.push(vertice);
  }
  const caminho = traceCaminho(menoresDistancias, inicio, final);
  setMenorDistancia(menoresDistancias[final].custo);
  setCaminho(caminho.join(' -> '))
  setResult(true);
};