import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ClassRepository } from "../repositories/ClassRepository";
import { CourseRepository } from "../repositories/CourseRepository";

class ClassController {
  async create(request: Request, response: Response) {
    const { name, code, semester } = request.body;
    const { course } = request.body;
    const classRepository = getCustomRepository(ClassRepository);
    const courseRepository = getCustomRepository(CourseRepository);

    try {
      let courseClass = await courseRepository.findOne({
        where: {
          name: course,
        },
      });

      if (!courseClass) {
        courseClass = courseRepository.create({
          name: course,
        });
        await courseRepository.save(courseClass);
      }

      const Class = classRepository.create({
        name,
        code,
        semester,
        course: courseClass,
      });
      await classRepository.save(Class);

      return response.status(201).json(Class);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ Error: "Erro ao inserir registro." });
    }
  }
}

export { ClassController };
