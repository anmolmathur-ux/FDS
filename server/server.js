import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()
app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())
app.use(morgan("dev"))

app.post("/api/info", (req, res) => {
  console.log("[INFO]", req.body)
  res.json({ ok: true })
})

app.post("/api/apply", (req, res) => {
  console.log("[APPLY]", req.body)
  res.json({ ok: true })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`)
})