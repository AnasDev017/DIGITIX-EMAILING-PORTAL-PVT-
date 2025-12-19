import  expess  from "express";
import mailSender from '../controllers/mailSender.js'
const Routes = expess.Router()

Routes.post('/sendMail',mailSender)
export default Routes