// loginRouter.js
import express from 'express';
import { loginController } from '../controllers/loginController.js';
// import loginware from '../middleware/loginware.js';

const loginRouter = express.Router();


loginRouter.post('/', loginController);


export default loginRouter;
