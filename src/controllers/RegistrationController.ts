import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ClassRepository } from "../repositories/ClassRepository";
import { RegistrationRepository } from "../repositories/RegistrationRepository";
import { StudentRepository } from "../repositories/StudentRepository";

class RegistrationController {
  async create(request: Request, response: Response) {
    const data = request.body;
    const registrationRepository = getCustomRepository(RegistrationRepository);
    const classRepository = getCustomRepository(ClassRepository);
    const studentRepository = getCustomRepository(StudentRepository);

    let studentClass = await studentRepository.findOne({
      where: {
        name: data.student,
      },
    });

    if (!studentClass) {
      studentClass = studentRepository.create({
        name: data.student,
      });
      await studentRepository.save(studentClass);
    }

    let registrationClass = await classRepository.findOne({
      where: {
        name: data.class,
      },
    });

    try {
      const registration = registrationRepository.create({
        number: data.number,
        student: studentClass,
        class: registrationClass,
      });
      await registrationRepository.save(registration);

      return response.status(201).json(registration);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ Error: "Erro ao inserir registro." });
    }
  }
}

export { RegistrationController };
