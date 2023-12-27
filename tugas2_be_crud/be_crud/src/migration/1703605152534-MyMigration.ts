import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703605152534 implements MigrationInterface {
    name = 'MyMigration1703605152534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todos" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`);
    }

}
