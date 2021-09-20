import { EntityRepository, Repository } from "typeorm";
import { Teacher } from "../entities/Teacher";

@EntityRepository(Teacher)
class TeacherRepository extends Repository<Teacher> {}

export { TeacherRepository };
