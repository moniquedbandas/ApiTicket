//esse index.js vai ser responsável por juntar todas as rotas que podem estar em arquivos diferentes.

import { parseRoutePath } from "../utils/parseRoutePath.js";
import { tickets } from "./tickets.js";

export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
//como tickets é uma lista, despejo tudo aqui nessa const routes como ...tickets
