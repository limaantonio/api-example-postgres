import { EntityRepository, Repository } from "typeorm";
import { Student } from "../entities/Student";

@EntityRepository(Student)
class StudentRepository extends Repository<Student> {}

export { StudentRepository };
