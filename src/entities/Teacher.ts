import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Class } from "./Class";

@Entity("teacher")
class Teacher {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Class, (classe) => classe.teacher)
  @JoinColumn({ name: "class_id" })
  class: Class;

  @CreateDateColumn()
  created_at: Date;
}

export { Teacher };
