import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
];

//controller é a função que vai executar alguma coisa quando a nossa rota for chamada.
