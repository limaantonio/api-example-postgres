import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Class } from "./Class";
import { Lesson } from "./Lesson";

@Entity("subject")
class Subject {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Lesson, (lesson) => lesson.subject)
  lesson: Lesson;

  @OneToMany(() => Class, (classe) => classe.subject)
  class: Class;

  @CreateDateColumn()
  created_at: Date;
}

export { Subject };
