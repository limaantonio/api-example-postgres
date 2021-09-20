import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SubjectRepository } from "../repositories/SubjectRepository";

class SubjectController {
  async create(request: Request, response: Response) {
    const { name } = request.body;
    const subjectRepository = getCustomRepository(SubjectRepository);

    try {
      const subject = subjectRepository.create({
        name,
      });
      await subjectRepository.save(subject);

      return response.status(201).json(subject);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ Error: "Erro ao inserir registro." });
    }
  }
}

export { SubjectController };
