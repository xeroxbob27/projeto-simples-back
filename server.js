const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.json({ message: "API funcionando com CI/CD no Render via github actions..." })
})

const corsOptions = {
  // lista de endereços autorizados a consumir a api
  // a primeira origem é o front-end publicado na vercel
  // a segunda origem deve ser substituída pela url real do front-end aberto no codespaces
  origin: [
    "https://projeto-simples-front-five.vercel.app",
    "https://humble-fortnight-pj6w6r95g5pvfr46w"
  ],

  // métodos http permitidos nas requisições para a api
  // get: buscar dados
  // post: cadastrar dados
  // put: atualizar dados
  // delete: remover dados
  methods: "GET,POST,PUT,DELETE",

  // cabeçalhos permitidos nas requisições
  // content-type permite informar o tipo de conteúdo enviado, como json
  // authorization é usado quando a api trabalha com token ou autenticação
  allowedHeaders: "Content-Type,Authorization",
}

// rota v1
app.get("/v1", (req, res) => {
  // cria uma data com o momento atual da chamada da rota
  // o timezone america/sao_paulo ajusta a data e hora para o horário de brasília
  const datahora = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo"
  })

  // retorna uma resposta em formato json
  res.json({
    message: "Api v1 respondendo no container docker...",
    chamada_em: datahora
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

