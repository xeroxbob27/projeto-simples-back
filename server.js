
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS
const corsOptions = {
  origin: [
    "https://projeto-simples-front-five.vercel.app",
    "https://humble-fortnight-pj6w6r95g5pvfr46w.github.dev"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Aplicar o CORS antes das rotas
app.use(cors(corsOptions));

// Permitir receber JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.json({
    message: "API funcionando com CI/CD no Render via GitHub Actions..."
  });
});

// Rota v1
app.get("/v1", (req, res) => {
  const datahora = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo"
  });

  res.json({
    message: "API v1 respondendo no container Docker...",
    chamada_em: datahora
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

