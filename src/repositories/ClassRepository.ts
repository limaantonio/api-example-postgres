import { EntityRepository, Repository } from "typeorm";
import { Class } from "../entities/Class";

@EntityRepository(Class)
class ClassRepository extends Repository<Class> {}

export { ClassRepository };
