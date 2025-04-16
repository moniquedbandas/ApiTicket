export async function jsonHandler(request, response) {
  const buffers = [];
  for await (const chunk of request) {
    buffers.push(chunk);
    // Cria um array buffers para armazenar pedaços (chunks) dos dados da requisição.
    // for await (const chunk of request) lê assincronamente os dados que chegaram no corpo da requisição
    // Isso é necessário porque o corpo da requisição pode vir em partes separadas.
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }
  //   - Junta todos os pedaços em um único `Buffer` e converte para `string`.
  //   - Depois tenta fazer o **`JSON.parse()`** para transformar essa string em um objeto JavaScript.
  //   - Se conseguir, armazena o objeto em `request.body`.
  //   - Se der erro (por exemplo, JSON malformado), define `request.body = null`.
  response.setHeader("Content-Type", "application/json");
}
