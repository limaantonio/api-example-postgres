import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "./Course";
import { Registration } from "./Registration";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

@Entity("class")
class Class {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  semester: string;

  @ManyToOne(() => Course, (course) => course.class)
  @JoinColumn({ name: "course_id" })
  course: Course;

  @ManyToOne(() => Subject, (subject) => subject.class)
  @JoinColumn({ name: "subject_id" })
  subject: Subject;

  @OneToMany(() => Teacher, (teacher) => teacher.class)
  teacher: Teacher;

  @OneToMany(() => Registration, (registration) => registration.class)
  registration: Registration;

  @CreateDateColumn()
  created_at: Date;
}

export { Class };
