import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ContentRepository } from "../repositories/ContentRepository";

class ContentController {
  async create(request: Request, response: Response) {
    const { location: content_url = "" } = request.file;
    const { name, type } = request.body;
    const contentRepository = getCustomRepository(ContentRepository);
    try {
      const content = contentRepository.create({
        name,
        type,
        content_url,
      });

      contentRepository.save(content);

      return response.json(content);
    } catch (error) {
      console.log(error);
    }
  }

  async list(request: Request, response: Response) {
    const contentRepository = getCustomRepository(ContentRepository);
    let contents;

    try {
      if (request.query.type) {
        contents = await contentRepository.find({
          where: {
            type: request.query.type,
          },
        });
      } else {
        contents = await contentRepository.find();
      }

      return response.json(contents);
    } catch (error) {
      return response.status(404).json({ Error: "Not found." });
    }
  }

  async listById(request: Request, response: Response) {
    const contentRepository = getCustomRepository(ContentRepository);
    const { id } = request.params;

    try {
      const contents = await contentRepository.findOne({
        where: {
          id: id,
        },
      });

      return response.json(contents);
    } catch (error) {
      return response.status(404).json({ Error: "Not found." });
    }
  }

  async deleteById(request: Request, response: Response) {
    const contentRepository = getCustomRepository(ContentRepository);
    const { id } = request.params;

    try {
      await contentRepository.delete(id);

      return response.status(204);
    } catch (error) {
      return response.status(404).json({ Error: "Not found." });
    }
  }
}

export { ContentController };
