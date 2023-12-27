import { AppDataSource } from "./data-source"
import * as express from "express"
import router from "./route"

const port: number = 5000

AppDataSource.initialize()
    .then(async () => {
        const app = express()

        app.use(express.json())
        app.use("/api/v1", router)

        app.listen(port, () => console.log(`server running on ${port}`))
    })
    .catch(error => console.log(error))