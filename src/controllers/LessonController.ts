import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ContentRepository } from "../repositories/ContentRepository";
import { LessonRepository } from "../repositories/LessonRepository";
import { SubjectRepository } from "../repositories/SubjectRepository";

class LessonController {
  async create(request: Request, response: Response) {
    const lessonRepository = getCustomRepository(LessonRepository);
    const subjectRepository = getCustomRepository(SubjectRepository);
    const contentRepository = getCustomRepository(ContentRepository);
    const { location: content_url = "" } = request.file;
    const { title, subject, description, content_name, content_type } =
      request.body;
    let contentLesson;

    try {
      let subjectLesson = await subjectRepository.findOne({
        where: {
          name: subject,
        },
      });

      if (!subjectLesson) {
        subjectLesson = subjectRepository.create({
          name: subject,
        });
        await subjectRepository.save(subjectLesson);
      }

      contentLesson = await contentRepository.findOne({
        where: {
          name: content_name,
        },
      });

      if (!contentLesson) {
        contentLesson = contentRepository.create({
          name: content_name,
          type: content_type,
          content_url,
        });
        await contentRepository.save(contentLesson);
      }

      const lesson = lessonRepository.create({
        title,
        description,
        subject: subjectLesson,
        content: contentLesson,
      });
      lessonRepository.save(lesson);
      return response.json(lesson);
    } catch (error) {
      console.log(error);

      return response.json({
        Error: "Não foi possivel inserir esse registro.",
      });
    }
  }
}

export { LessonController };
