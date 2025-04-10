API para Gerenciamento de Tickets de Suporte Técnico
Descrição
Este projeto é uma API desenvolvida em Node.js para gerenciar tickets de suporte técnico. A API permite criar, atualizar, listar e filtrar tickets, bem como fechar e excluir tickets. O foco está no desenvolvimento do back-end, com suporte a operações básicas de CRUD para os tickets.

Funcionalidades
- Criar tickets: Envie informações sobre o equipamento, descrição e nome do usuário. O ID do ticket é gerado automaticamente.
- Listar tickets: Recupere todos os tickets cadastrados.
- Filtrar tickets: Encontre tickets com base em critérios específicos.
- Atualizar tickets: Edite as informações do equipamento e descrição de um ticket existente (o nome do usuário permanece fixo).
- Fechar tickets: Marque um ticket como encerrado.
- Excluir tickets: Remova um ticket do sistema.


Tecnologias Utilizadas
- Node.js: Plataforma utilizada para o desenvolvimento da API.
- Express: Framework para gerenciamento de rotas e estruturação da aplicação.
- UUID: Biblioteca para geração automática de IDs únicos.
- JSON: Formato de dados para enviar e receber informações.


Estrutura de Rotas
| Método | Rota | Descrição | 
| POST | /tickets | Criar um novo ticket. | 
| GET | /tickets | Listar todos os tickets. | 
| GET | /tickets/:filter | Filtrar tickets. | 
| PUT | /tickets/:id | Atualizar um ticket. | 
| DELETE | /tickets/:id | Excluir um ticket. | 



Instalação
- Clone este repositório:git clone https://github.com/seu-usuario/nome-do-repositorio.git

- Navegue até o diretório do projeto:cd nome-do-repositorio

- Instale as dependências:npm install

- Execute o servidor:npm start



Uso
Para testar as rotas, utilize ferramentas como Postman ou Insomnia, enviando requisições para o servidor local configurado em http://localhost:3000.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
Este projeto está licenciado sob a MIT License.
