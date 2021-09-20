import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ClassRepository } from "../repositories/ClassRepository";
import { TeacherRepository } from "../repositories/TeacherRepository";

class TeacherController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    const data = request.body;
    const teacherRepository = getCustomRepository(TeacherRepository);
    const classRepository = getCustomRepository(ClassRepository);

    try {
      let teacherClass = await classRepository.findOne({
        where: {
          name: data.class,
        },
      });

      const teacher = teacherRepository.create({
        name: name,
        email: email,
        class: teacherClass,
      });
      await teacherRepository.save(teacher);

      return response.json(teacher);
    } catch (error) {
      console.log(error);
      return response.json({ error: "Erro" });
    }
  }
}

export { TeacherController };
