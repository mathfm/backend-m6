import { Router } from "express";
import EmployerController from "../controllers/EmployerController.js";
import { employerMiddleware } from "../shared/middlewares/employerMiddleware.js";


export const employerRouter = Router();


employerRouter.post("/employer/create", employerMiddleware, (req, res) => {
  return EmployerController.createUser(req, res);
});

employerRouter.post("/employer/login", (req, res) => {
    return EmployerController.loginEmployer(req, res);
})

employerRouter.get("/employer", (req, res) => {
    return EmployerController.getAllEmployer(req, res);
})

employerRouter.get("/employer/:id", (req, res) => {
    return EmployerController.getEmployer(req, res);
})

employerRouter.put("/employer/update/:id", (req, res) => {
    return EmployerController.updateEmployer(req, res);
})

employerRouter.delete("/employer/delete/:id", (req, res) => {
    return EmployerController.deleteEmployer(req, res);
})