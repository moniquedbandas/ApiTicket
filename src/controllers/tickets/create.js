import { randomUUID } from "node:crypto";

export function create({ request, response }) {
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
  return response.end(JSON.stringify(ticket));
}
