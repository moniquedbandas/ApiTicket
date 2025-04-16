import { create } from "../controllers/tickets/create.js";
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
];

//controller é a função que vai executar alguma coisa quando a nossa rota for chamada.
