/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUserSource1673473823268 implements MigrationInterface {
    name = 'createTableUserSource1673473823268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "ip" character varying NOT NULL, "phone" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source" ("id" SERIAL NOT NULL, "comment" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "email" character varying NOT NULL, "usersId" integer, CONSTRAINT "PK_018c433f8264b58c86363eaadde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "source" ADD CONSTRAINT "FK_facbf8120f806ce0732ba0be75a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "source" DROP CONSTRAINT "FK_facbf8120f806ce0732ba0be75a"`);
        await queryRunner.query(`DROP TABLE "source"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
