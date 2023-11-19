import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPlayerCredentialsTable1700402932906
  implements MigrationInterface
{
  name = 'AddPlayerCredentialsTable1700402932906';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "player_credentials" ("id" SERIAL NOT NULL, "playerId" character varying NOT NULL, "passwordHash" character varying NOT NULL, "salt" character varying NOT NULL, CONSTRAINT "PK_456c2a43014f5e0e8af248d14d4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "player_credentials"`);
  }
}
