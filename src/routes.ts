import { Router } from "express"
import { SettingsController } from "./controller/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

/**
 * tipos de parametros
 * Routes Params => parametros de rotas
 * Query Params => filtros e buscas
 * Body Params => {
*/

routes.post("/settings", settingsController.create);


export { routes }