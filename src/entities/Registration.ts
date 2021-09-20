import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Class } from "./Class";
import { Student } from "./Student";

@Entity("registration")
class Registration {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  number: string;

  @ManyToOne(() => Class, (classe) => classe.registration)
  @JoinColumn({ name: "class_id" })
  class: Class;

  @OneToOne(() => Student, (student) => student.registration)
  @JoinColumn({ name: "student_id" })
  student: Student;

  @CreateDateColumn()
  created_at: Date;
}

export { Registration };
