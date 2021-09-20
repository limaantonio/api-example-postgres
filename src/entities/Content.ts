import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lesson } from "./Lesson";

export enum TypeRole {
  AVALIACAO = "avaliação",
  TESTE = "teste",
  QUIZ = "quiz",
  MATERIAL_AULA = "material_aula",
}

@Entity("content")
class Content {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: TypeRole,
    default: TypeRole.MATERIAL_AULA,
  })
  type: TypeRole;
  @Column()
  content_url: string;

  @OneToMany(() => Lesson, (lesson) => lesson.content)
  lesson: Lesson;

  @CreateDateColumn()
  created_at: Date;
}

export { Content };
