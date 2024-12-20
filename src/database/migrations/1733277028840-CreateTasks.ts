import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasks1733277028840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "tasks",
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
                isNullable: true,
              },
              {
                name: "status",
                type: "varchar",
              },
              {
                name:"milistone_id",
                type:"uuid",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
              {
                name: "updated_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks");
    }

}
