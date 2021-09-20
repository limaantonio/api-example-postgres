import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Class } from "./Class";

@Entity("course")
class Course {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Class, (classe) => classe.course)
  class: Class;

  @CreateDateColumn()
  created_at: Date;
}

export { Course };
