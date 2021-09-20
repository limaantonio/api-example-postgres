import { EntityRepository, Repository } from "typeorm";
import { Registration } from "../entities/Registration";

@EntityRepository(Registration)
class RegistrationRepository extends Repository<Registration> {}

export { RegistrationRepository };
