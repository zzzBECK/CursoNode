import { Router } from "express"
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

/**
 * tipos de parametros
 * Routes Params => parametros de rotas
 * Query Params => filtros e buscas
 * Body Params => {
*/

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create)


export { routes }