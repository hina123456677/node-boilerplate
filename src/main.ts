import "dotenv/config"
import cors from "cors"
import express from "express"
import helmet from "helmet"

const app = express()

app.use(helmet())
app.use(express.json())

const allowed = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",")
  : ["http://localhost:3000"]

app.use(
  cors({
    origin: allowed,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
)

app.get("/", (_, res) => res.send("Hello, World!"))

const port = Number(process.env.PORT ?? 8001)
app.listen(port, () => console.log(`🚀 Server is running on port ${port}`))
