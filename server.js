const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.json({ message: "API funcionando com CI/CD no Render..." })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})