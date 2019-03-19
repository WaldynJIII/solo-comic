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