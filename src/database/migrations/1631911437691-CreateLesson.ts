import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLesson1631911437691 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "lesson",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "content_id",
            type: "uuid",
          },
          {
            name: "subject_id",
            type: "uuid",
            isNullable: true,
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKContent",
            referencedTableName: "content",
            referencedColumnNames: ["id"],
            columnNames: ["content_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKSubject",
            referencedTableName: "subject",
            referencedColumnNames: ["id"],
            columnNames: ["subject_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("lesson");
  }
}
