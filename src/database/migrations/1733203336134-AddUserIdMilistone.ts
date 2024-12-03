import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUserIdMilistone1733203336134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('milistones',new TableColumn({
            name:'user_id',
            type:'uuid'
        }));

        await queryRunner.createForeignKey('milistones',new TableForeignKey({
            name:"userMilistone",
            columnNames:['user_id'],
            referencedColumnNames:['id'],
            referencedTableName:"users",
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("milistones", "userMilistone");
        await queryRunner.dropColumn('milistones','user_id');
    }

}
