import { EntityRepository, Repository } from "typeorm";
import { Lesson } from "../entities/Lesson";

@EntityRepository(Lesson)
class LessonRepository extends Repository<Lesson> {}

export { LessonRepository };
