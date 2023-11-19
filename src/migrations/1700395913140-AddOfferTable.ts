import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOfferTable1700395913140 implements MigrationInterface {
    name = 'AddOfferTable1700395913140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "offer" ("id" SERIAL NOT NULL, "gameId" character varying NOT NULL, "offerSetName" character varying NOT NULL, "offerSetId" character varying NOT NULL, "sku" character varying NOT NULL, "availability" integer NOT NULL, "priceInCents" integer NOT NULL, "currency" character varying NOT NULL, "products" jsonb NOT NULL, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "offer"`);
    }

}
