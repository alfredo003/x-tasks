import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class ForeignKeyTasks1733334562415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createForeignKey('tasks', new TableForeignKey({
            name:"milistone",
            columnNames:['milistone_id'],
            referencedColumnNames:['id'],
            referencedTableName:"milistones",
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("milistones", "milistone");
    }

}
