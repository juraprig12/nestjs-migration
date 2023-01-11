import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsersSource1673390194699 implements MigrationInterface {
    name = 'createTableUsersSource1673390194699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "account" character varying NOT NULL, "password" character varying NOT NULL, "phone" integer NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source" ("id" SERIAL NOT NULL, "link" character varying NOT NULL, "comment" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "phone" integer NOT NULL, "usersId" integer, CONSTRAINT "PK_018c433f8264b58c86363eaadde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "source" ADD CONSTRAINT "FK_facbf8120f806ce0732ba0be75a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "source" DROP CONSTRAINT "FK_facbf8120f806ce0732ba0be75a"`);
        await queryRunner.query(`DROP TABLE "source"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
