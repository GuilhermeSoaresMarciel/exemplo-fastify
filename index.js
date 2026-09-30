// Caso queira usar este código, baixe-o e abra-o no VS Code. Em seguida, digite `npm install` no terminal para baixar as dependências necessárias.

// Importa o framework Fastify para dentro do projeto.
// O Fastify facilita a criação de servidores e APIs com Node.js.
import fastify from "fastify";

// Cria uma aplicação Fastify.
// O "app" será usado para configurar as rotas e o servidor.
const app = fastify();

// Cria uma rota do tipo GET.
//
// "/" representa a rota principal da aplicação.
// A função será executada quando o servidor receber
// uma requisição GET nessa rota.
//
// Quando alguém acessar:
// http://localhost:3333/
//
// essa função será executada.
app.get("/", async () => {
  // Retorna "Guilherme Soares" como resposta para o cliente.
  return "Guilherme Soares";
});

// Inicia o servidor na porta 3333.
//
// O servidor ficará aguardando requisições nessa porta.
// Exemplo de endereço:
// http://localhost:3333
app.listen({ port: 3333 }, (error) => {
  // Verifica se ocorreu algum erro ao iniciar o servidor.
  if (error) {
    console.error(error);

    process.exit(1);
  }

  // Exibe uma mensagem no terminal informando
  // que o servidor foi iniciado com sucesso.
  console.log("Servidor rodando na porta 3333");
});

/*
  ==============================
  CONFIGURAÇÃO DO PROJETO
  ==============================

  1. Inicializar o projeto Node.js:

  npm init -y

  Esse comando cria o arquivo "package.json",
  que contém as configurações e dependências do projeto.

  2. Instalar o Fastify:

  npm install fastify

  Esse comando instala o Fastify no projeto e
  adiciona o pacote às dependências do package.json.

  ==============================
  EXECUTANDO O PROJETO
  ==============================

  Para executar o arquivo:

  node server.js

  OBS:
  Troque "server.js" pelo nome do seu arquivo.

  ==============================
  TESTANDO A API
  ==============================

  Abra o Thunder Client e faça uma requisição:

  Método: GET
  URL: http://localhost:3333

  O servidor deverá responder:

  "Guilherme Soares"
*/
