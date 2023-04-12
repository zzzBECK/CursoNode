import { Router } from "express"

import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "./repositories/SettingsRepository"

const routes = Router();

routes.post("/settings", (request, response) => {
    const settingsRepository = getCustomRepository(SettingsRepository);
    return response.json({ message: "Hello World" })
})


export { routes }