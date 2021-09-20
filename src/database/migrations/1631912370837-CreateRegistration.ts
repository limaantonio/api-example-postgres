import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRegistration1631912370837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "registration",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "number",
            type: "varchar",
          },

          {
            name: "class_id",
            type: "uuid",
          },
          {
            name: "student_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKClass",
            referencedTableName: "class",
            referencedColumnNames: ["id"],
            columnNames: ["class_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKStudent",
            referencedTableName: "student",
            referencedColumnNames: ["id"],
            columnNames: ["student_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("registration");
  }
}
