//esse index.js vai ser responsável por juntar todas as rotas que podem estar em arquivos diferentes.

import { tickets } from "./tickets.js";

export const routes = [...tickets];
//como tickets é uma lista, despejo tudo aqui nessa const routes como ...tickets
