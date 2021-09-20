import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CourseRepository } from "../repositories/CourseRepository";

class CourseController {
  async create(request: Request, response: Response) {
    const { name } = request.body;
    const courseRepository = getCustomRepository(CourseRepository);

    try {
      const course = courseRepository.create({
        name,
      });
      await courseRepository.save(course);

      return response.status(201).json(course);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ Error: "Erro ao inserir registro." });
    }
  }

  async list(request: Request, response: Response) {
    const courseRepository = getCustomRepository(CourseRepository);
    try {
      const courses = await courseRepository.find();

      return response.status(200).json(courses);
    } catch (error) {
      return response.status(404).json({ Error: "Registros não encontrados." });
    }
  }

  async listById(request: Request, response: Response) {
    const { id } = request.params;
    const courseRepository = getCustomRepository(CourseRepository);

    try {
      const course = await courseRepository.findOne(id);

      return response.status(200).json(course);
    } catch (error) {
      return response.status(404).json({ Error: "Registro não encontrados." });
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, registration } = request.body;
    const courseRepository = getCustomRepository(CourseRepository);

    try {
      const course = courseRepository.update(id, {
        name: name,
      });

      return response.send();
    } catch (error) {
      return response.status(404).json({ Error: "Registro não encontrados." });
    }
  }
}

export { CourseController };
