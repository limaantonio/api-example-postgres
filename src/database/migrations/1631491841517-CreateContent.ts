import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContent1631491841517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "content",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "type",
            type: "enum",
            enum: ["AVALIACAO", "TESTE", "QUIZ", "MATERIAL_AULA"],
            // enumName: "type_enum",
            // default: '"inactive"',
          },
          {
            name: "content_url",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("content");
  }
}
