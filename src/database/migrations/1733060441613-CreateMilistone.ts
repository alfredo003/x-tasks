import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateMilistone1733060441613
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "milistones",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          { name: "title",
            type: "varchar",
            isNullable: false
          },
            {
            name:'date',
            type:'timestamp with time zone',
            isNullable: false,
             }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("milistones");
  }
}
