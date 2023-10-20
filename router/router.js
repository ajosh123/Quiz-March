import { Router } from "express";
const router = Router();

//import contollers
import * as controller from '../controller/controller.js';

//question from route




router.route('/questions')
        .get(controller.getQuestions) //get request
        .post(controller.insertQuestions) //post request
        .delete(controller.dropQuestions) //delete request

router.route('/result')
.get(controller.getResult)
.post(controller.storeResult)   
.delete(controller.dropResult)     

export default router;