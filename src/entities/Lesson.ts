import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Content } from "./Content";
import { Subject } from "./Subject";

@Entity("lesson")
class Lesson {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Subject, (subject) => subject.lesson)
  @JoinColumn({ name: "subject_id" })
  subject: Subject;

  @ManyToOne(() => Content, (content) => content.lesson)
  @JoinColumn({ name: "content_id" })
  content: Content;

  @CreateDateColumn()
  created_at: Date;
}

export { Lesson };
