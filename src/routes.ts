import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentControle } from "./controllers/CreateComplimentControle";
import { ensureAutheticated } from "./middlewares/ensureAutheticated";
import { ListUserSendComplimentControlle } from "./controllers/ListUserSendComplimentControlle";
import { ListUserReceiveComplimentControlle } from "./controllers/ListUserReceiveComplimentControlle";
import { TagsListController } from "./controllers/TagsListController";
import { ListUserController } from "./controllers/ListUserController";


const router = Router();

const createUserController = new  CreateUserController();
const createTagController = new  CreateTagController();
const authenticateUserController = new  AuthenticateUserController();
const createComplimentControle = new CreateComplimentControle();
const listUserSendComplimentControlle = new ListUserSendComplimentControlle();
const listUserReceiveComplimentControlle = new ListUserReceiveComplimentControlle();
const tagsListController = new TagsListController();
const listUserController = new ListUserController();


router.post("/tags", ensureAutheticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments",ensureAutheticated , createComplimentControle.handle);


router.get("/users/compliments/send",ensureAutheticated,listUserReceiveComplimentControlle.handle);
router.get("/users/compliments/receive",ensureAutheticated,listUserReceiveComplimentControlle.handle);
router.get('/tags',ensureAutheticated,tagsListController.handle);
router.get('/users',ensureAutheticated,listUserController.handle);


export { router }; 