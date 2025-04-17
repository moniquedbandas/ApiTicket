import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
  //request e response entre {} para que não haja problema com a ordem dos parâmetros, já que eles estão num objeto
  const { equipment, description, user_name } = request.body;
  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    update_at: new Date(),
  };
  database.insert("tickets", ticket);

  return response.writeHead(201).end(JSON.stringify(ticket));
}
