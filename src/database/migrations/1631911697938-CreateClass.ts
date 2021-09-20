import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1631911697938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "class",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "code",
            type: "varchar",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "semester",
            type: "varchar",
          },
          {
            name: "subject",
            type: "varchar",
          },
          {
            name: "course_id",
            type: "uuid",
          },
          {
            name: "lesson_id",
            type: "uuid",
          },

          {
            name: "created_at",
            type: "timestamp",
            isNullable: true,
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKCourse",
            referencedTableName: "course",
            referencedColumnNames: ["id"],
            columnNames: ["course_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKLesson",
            referencedTableName: "lesson",
            referencedColumnNames: ["id"],
            columnNames: ["lesson_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("class");
  }
}
