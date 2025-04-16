import http from "node:http";
import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(request, response) {
  // Aqui está sendo criada a função que será chamada sempre que o servidor receber uma requisição.
  // request: contém os dados da requisição (ex: URL, método, headers, etc.).
  // response: é o objeto usado para enviar a resposta de volta para o cliente.
  await jsonHandler(request, response);
  routeHandler(request, response);
}

http.createServer(listener).listen(3333);

// Cria o servidor com a função `listener` como manipulador das requisições.
// Faz o servidor **"escutar" a porta 3333**, ou seja, ele ficará aguardando conexões nessa porta.
