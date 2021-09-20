import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import { ApiController } from "../controllers/ApiController";
import { ClassController } from "../controllers/ClassController";
import { ContentController } from "../controllers/ContentController";
import { CourseController } from "../controllers/CourseController";
import { LessonController } from "../controllers/LessonController";
import { RegistrationController } from "../controllers/RegistrationController";
import { StudentController } from "../controllers/StudentController";
import { TeacherController } from "../controllers/TeacherController";
const apiController = new ApiController();

const studentController = new StudentController();
const teacherController = new TeacherController();
const contentController = new ContentController();
const courseController = new CourseController();
const classController = new ClassController();
const lessonController = new LessonController();
const registrationController = new RegistrationController();

const routes = Router();

routes.post("/apiwebhook", apiController.fulfillmentText);

routes.post("/student", studentController.create);
routes.get("/students", studentController.list);
routes.get("/student/:id/", studentController.listById);
routes.put("/student/:id/", studentController.update);

routes.post("/teacher", teacherController.create);

routes.post(
  "/content",
  multer(multerConfig).single("file"),
  contentController.create
);
routes.get("/contents", contentController.list);
routes.get("/content/:id/", contentController.listById);
routes.delete("/content/:id/", contentController.deleteById);

routes.post("/curso", courseController.create);

routes.post("/class", classController.create);

routes.post(
  "/lesson",
  multer(multerConfig).single("file"),
  lessonController.create
);

routes.post("/registration", registrationController.create);

// routes.get("/", (request, response) => {
//   return response.json("ApiV1 bot Arley");
// });

export { routes };
