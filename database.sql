
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- user_preferences table includes all information taken from initial signup
CREATE TABLE "user_preferences" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES "user" NOT NULL UNIQUE,
	"name" VARCHAR(30) NOT NULL,
	"weight" INTEGER NOT NULL,
	"height" INTEGER NOT NULL,
	"age" INTEGER NOT NULL,
	"days_per_week" INTEGER NOT NULL,
	"routine" VARCHAR(80)
);

-- equipment includes all equipment accessible within application/database
CREATE TABLE "equipment" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80)
);

-- represents many-to-many relationship between users and equipment available at their gym
CREATE TABLE "users_equipment" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES "user" NOT NULL,
	"equipment_id" INTEGER REFERENCES "equipment" NOT NULL
);

-- workout templates are predetermined and are the connection point to drawing data from exerciseDB API
CREATE TABLE "full_body_workouts" (
	"id" SERIAL PRIMARY KEY,
	"days_per_week" INTEGER NOT NULL,
	"e_one" VARCHAR (255),
	"e_two" VARCHAR (255),
	"e_three" VARCHAR (255),
	"e_four" VARCHAR (255),
	"e_five" VARCHAR (255),
	"e_six" VARCHAR (255),
	"e_seven" VARCHAR (255),
	"e_eight" VARCHAR (255),
	"e_nine" VARCHAR (255),
	"e_ten" VARCHAR (255),
	"e_eleven" VARCHAR (255)
);

-- exercise history logs all exercises already completed by user within given week
-- resets at the start of every week
CREATE TABLE "exercise_history" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES "user" NOT NULL UNIQUE,
	"exercise_name" VARCHAR (255),
	"date_completed" TIMESTAMP NOT NULL 
);

-- insert data into user_preferences table
INSERT INTO "user_preferences" ("user_id", "name", "weight", "height", "age", "days_per_week", "routine")
VALUES (2, 'Dan', 165, 68, 23, 2, 'full_body'),
(3, 'Nate', 160, 68, 20, 4, 'full_body');

-- insert data into equipment table 
INSERT INTO "equipment" ("name")
VALUES ('barbell'), ('body weight'), ('bosu ball'), ('cable'), ('dumbbell'), ('elliptical machine'), ('ez barbell'), ('kettlebell'), ('leverage machine'), ('medicine ball'), ('stability ball'), ('stationary bike'), ('stepmill machine'), ('weighted'); 

-- insert equipment available to each user
INSERT INTO "users_equipment" ("user_id", "equipment_id")
VALUES 
(2, 1), (2, 2), (2, 4), (2, 5), (2, 6), (2, 7), (2, 8), (2, 9), (2, 10), (2, 12), (2, 13), (2, 14),
(3, 1), (3, 2), (3, 3), (3, 5), (3, 7), (3, 8), (3, 10), (3, 14);

-- test table relationships 
SELECT ("user_preferences"."name"), count("equipment"."name") AS equipment_available

FROM "user_preferences" 
JOIN "users_equipment" ON "users_equipment"."user_id" = "user_preferences"."user_id"
JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"

GROUP BY "user_preferences"."name";

-- queryText for grabbing all preferences by specific id
SELECT * FROM "user_preferences" WHERE id = 2;

-- grab workout template dependant on #/days day
SELECT * FROM "full_body_workouts" WHERE "days_per_week" = 2;

-- select all equipment associated with one user
SELECT array_agg("equipment"."name") AS equipment_available

  FROM "users_equipment" 
  JOIN "user" ON "users_equipment"."user_id" = "user"."id"
  JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
  
  WHERE "users_equipment"."user_id" = 2
  GROUP BY "users_equipment"."user_id";