

Create a Database called "solo-comic"
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "hero"(
"id" SERIAL PRIMARY KEY,
"username" VARCHAR
);
CREATE TABLE "l-arm" (
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero"
);
CREATE TABLE "r-arm" (
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero"
);
CREATE TABLE "l-leg" (
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero"
);
CREATE TABLE "r-leg" (
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero"
);
CREATE TABLE "chest" (
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero"
);
CREATE TABLE "head" (
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero"
);
CREATE TABLE "costume" (
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero"
);

ALTER TABLE "hero"
RENAME COLUMN "username" TO "name";
INSERT INTO "r-arm" ( "image", "hero_id")
                       VALUES ('https://i.imgur.com/QTnXvpu.jpg', '1');
INSERT INTO "hero"("name")
VALUES('batman');

CREATE TABLE "body_pit"(
"id" SERIAL PRIMARY KEY,
"image" VARCHAR,
"hero_id" INT REFERENCES "hero",
"user_id" INT REFERENCES "user"
);
INSERT INTO "hero"("name")
VALUES('spiderman');
INSERT INTO "l-arm" ( "image", "hero_id")
VALUES ('https://static.giantbomb.com/uploads/square_medium/2/21654/962066-88952_hulk_400.jpg', '4');
INSERT INTO "l-leg" ( "image", "hero_id")
                       VALUES ('https://i.imgur.com/jDIh4HO.jpg', '7');