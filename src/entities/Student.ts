import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Registration } from "./Registration";

@Entity("student")
class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToOne(() => Registration, (registration) => registration.student)
  registration: Registration;

  @CreateDateColumn()
  created_at: Date;
}

export { Student };
