import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AddCreatedAtAndUpdateAt1637389426743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("users", [
            new TableColumn({
                name: 'createdAt',
                type: 'time',
                isNullable: false,
                default: 'now()'
            }),
            new TableColumn({
                name: 'updatedAt',
                type: 'time',
                isNullable: false,
                default: 'now()'
            })
        ])
        await queryRunner.addColumns("posts", [
            new TableColumn({
                name: 'createdAt',
                type: 'time',
                isNullable: false,
                default: 'now()'
            }),
            new TableColumn({
                name: 'updatedAt',
                type: 'time',
                isNullable: false,
                default: 'now()'
            })
        ])
        return await queryRunner.addColumns("comments", [
            new TableColumn({
                name: 'createdAt',
                type: 'time',
                isNullable: false,
                default: 'now()'
            }),
            new TableColumn({
                name: 'updatedAt',
                type: 'time',
                isNullable: false,
                default: 'now()'
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "createdAt");
        await queryRunner.dropColumn("users", "updatedAt");
        await queryRunner.dropColumn("posts", "createdAt");
        await queryRunner.dropColumn("posts", "updatedAt");
        await queryRunner.dropColumn("comments", "createdAt");
        return await queryRunner.dropColumn("comments", "updatedAt");
    }

}
