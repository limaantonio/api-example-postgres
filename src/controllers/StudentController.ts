import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { StudentRepository } from "../repositories/StudentRepository";

class StudentController {
  async create(request: Request, response: Response) {
    const { name } = request.body;
    const studentRepository = getCustomRepository(StudentRepository);

    try {
      const student = studentRepository.create({
        name,
      });
      await studentRepository.save(student);

      return response.status(201).json(student);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ Error: "Erro ao inserir registro." });
    }
  }

  async list(request: Request, response: Response) {
    const studentRepository = getCustomRepository(StudentRepository);
    try {
      const students = await studentRepository.find();

      return response.status(200).json(students);
    } catch (error) {
      return response.status(404).json({ Error: "Registros não encontrados." });
    }
  }

  async listById(request: Request, response: Response) {
    const { id } = request.params;
    const studentRepository = getCustomRepository(StudentRepository);

    try {
      const student = await studentRepository.findOne(id);

      return response.status(200).json(student);
    } catch (error) {
      return response.status(404).json({ Error: "Registro não encontrados." });
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, registration } = request.body;
    const studentRepository = getCustomRepository(StudentRepository);

    try {
      const student = studentRepository.update(id, {
        name: name,
        registration: registration,
      });

      return response.send();
    } catch (error) {
      return response.status(404).json({ Error: "Registro não encontrados." });
    }
  }
}

export { StudentController };
