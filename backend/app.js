const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 4000

app.use(cors())
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" })
})

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})
