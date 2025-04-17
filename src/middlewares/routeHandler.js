import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database();
export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
    //utilizamos .find() para procurar dentro do array routes uma rota que corresponda:
    //Ao método HTTP da requisição (route.method === request.method).
    //Ao caminho solicitado (route.path === request.url).
    //Se encontrar uma rota que corresponde aos critérios, ela será armazenada na variável route.
  });
  if (route) {
    const routeParams = request.url.match(route.path);
    const { query } = routeParams.groups;
    request.query = query ? extractQueryParams(query) : {};

    return route.controller({ request, response, database });
    // Caso a rota tenha sido encontrada, o código chama a função controller associada a essa rota, passando os objetos request e response.
  }

  return response.writeHead(404).end();
  //   Se nenhuma rota for encontrada, enviamos uma resposta HTTP 404 ao cliente, indicando que o caminho solicitado não existe.
}
