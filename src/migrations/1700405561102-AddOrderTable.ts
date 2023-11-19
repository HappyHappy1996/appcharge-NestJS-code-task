import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOrderTable1700405561102 implements MigrationInterface {
  name = 'AddOrderTable1700405561102';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "order" ("id" SERIAL NOT NULL, "offerSetId" character varying NOT NULL, "creditCard" jsonb NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "order"`);
  }
}
