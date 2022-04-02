CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- add form_complete column to be updated when user completes initial signup form
ALTER TABLE "user" ADD "form_complete" BOOLEAN DEFAULT FALSE;

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

-- add image column to equipment table
ALTER TABLE "equipment" ADD "img_url" VARCHAR;

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

-- add exercise table to DB 
CREATE TABLE "user_exercises"  (
	"id" SERIAL PRIMARY KEY, 
	"user_id" INTEGER REFERENCES "user" NOT NULL,
	"bodyPart" VARCHAR NOT NULL,
	"equipment" VARCHAR NOT NULL,
	"gifUrl" VARCHAR NOT NULL,
	"API_id" VARCHAR NOT NULL,
	"name" VARCHAR NOT NULL,
	"target" VARCHAR NOT NULL,
	"sets" VARCHAR NOT NULL,
	"reps" VARCHAR NOT NULL,
	"isComplete" BOOLEAN DEFAULT FALSE
);


-- max history table for users
CREATE TABLE "exercise_maxes" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES "user" NOT NULL,
	"exercise" VARCHAR NOT NULL,
	"weight" INTEGER NOT NULL,
	"reps" INTEGER NOT NULL,
	"date" date not null default CURRENT_DATE
);

-- add muscle group category to exercise_maxes table
ALTER TABLE "exercise_maxes" ADD "muscle_group" VARCHAR;

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
SELECT * FROM "user_preferences" WHERE "user_id" = 2;

-- grab workout template dependant on #/days day
SELECT * FROM "full_body_workouts" WHERE "days_per_week" = 2;

-- select all equipment associated with one user
SELECT array_agg("equipment"."name") AS equipment_available

  FROM "users_equipment" 
  JOIN "user" ON "users_equipment"."user_id" = "user"."id"
  JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
  
  WHERE "users_equipment"."user_id" = 2
  GROUP BY "users_equipment"."user_id";
  
-- select days_per_week for specified user
SELECT "user_preferences"."days_per_week" FROM "user_preferences" WHERE id=2;

-- select all exercises in exerciseHistory table for one user
SELECT array_agg("exercise_history"."exercise_id") AS exercise_id

FROM "exercise_history" 
JOIN "user" ON "exercise_history"."user_id" = "user"."id"

WHERE "exercise_history"."user_id" = 3
GROUP BY "exercise_history"."user_id";

INSERT INTO "exercises" ("bodyPart", "equipment", "gifUrl", "API_id", "name", "target", "complete")
VALUES ('waist', 'body weight', 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif', '0002', '45° side bend', 'abs', false);

-- select all equipment from equipment table as array
SELECT (array_agg("equipment"."name") AS "equipment_list") FROM "equipment";

-- insert dummy max into exercise_maxes table
INSERT INTO "exercise_maxes" ("user_id", "exercise", "weight", "reps")
VALUES (2, 'bench press', 300, 1);

-- select equipment name + id from equipment table
SELECT "equipment"."id", "equipment"."name", "equipment"."img_url" from "equipment" ORDER BY "equipment"."id";

-- insert one equipment into DB 
INSERT INTO "users_equipment" ("user_id", "equipment_id") VALUES (2, 11);

-- test query for removing equipment from DB for specific user
DELETE FROM "users_equipment" WHERE "users_equipment"."user_id" = 4 AND "users_equipment"."equipment_id" = 11;

-- select equipment name + id
SELECT "equipment"."id", "equipment"."name"
  
      FROM "users_equipment" 
      JOIN "user" ON "users_equipment"."user_id" = "user"."id"
      JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
      
      WHERE "users_equipment"."user_id" = 3;

-- change status of user when form is completed
UPDATE "user" SET "form_complete" = TRUE WHERE "id" = 5;

-- test query for remove exercise from users_exercises table
DELETE FROM "user_exercises" WHERE "user_id" = 2;

-- test query for updating specific row in user_exercises table
UPDATE "user_exercises" 
    SET "bodyPart" = '$1', 
     "equipment" = '$2',
     "gifUrl" = '$3', 
     "API_id" = '$4', 
     "name" = '$5'
    WHERE "id" = 78;
 
-- selects array of all exercises for a given user
    SELECT array_agg("user_exercises"."API_id") AS exercise_id

      FROM "user_exercises" 

      WHERE "user_exercises"."user_id" = 2;
     

-- adds user id and user equipment id to users_equipment join table
INSERT INTO "users_equipment" ("user_id", "equipment_id")
VALUES 
(76, 1), (76, 2);

-- select all maxes where category = chest
SELECT * FROM "exercise_maxes" WHERE "user_id" = 2 AND "muscle_group" = 'chest';

-- change status of completion of exercise between true or false
UPDATE "user_exercises" SET "isComplete" = TRUE WHERE "id" = 772 AND "user_id" = 2;

-- update user_preferences table for specific user
UPDATE "user_preferences" SET "name" = 'Daniel', "weight" = 175, "height" = 70, "age" = 25 WHERE "user_id" = 2;

-- update user_preferences routine column
UPDATE "user_preferences" 
    SET "days_per_week" = 4, "routine" = 'full_body'
    WHERE "user_id" = 2;

-- select all equipment for specific user
SELECT "equipment"."id", "equipment"."name", "equipment"."img_url"
  
    FROM "users_equipment" 
    JOIN "user" ON "users_equipment"."user_id" = "user"."id"
    JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
    WHERE "users_equipment"."user_id" = 2
            ORDER BY "users_equipment"."id"
;

-- delete all user equipment (to be replaced by updated list)
DELETE FROM "users_equipment" WHERE "user_id" = 2;

-- delete exercise max id from exercise_maxes table 
DELETE FROM "exercise_maxes" WHERE "id" = 2;

-- adds exercises taken from API into DB for given user
INSERT INTO "user_exercises" ("user_id", "bodyPart", "equipment", "gifUrl", "API_id", "name", "target", "sets", "reps")
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
         
-- selects all exercises for a given user
SELECT * FROM "user_exercises" WHERE "user_id" = $1 ORDER BY "id";

-- updates cells for a given exercise when swap is made
UPDATE "user_exercises" SET "bodyPart" = $1, "equipment" = $2, "gifUrl" = $3, "API_id" = $4, "name" = $5
    WHERE "id" = $6;
    
-- changes status of exercise between true or false 
UPDATE "user_exercises" SET "isComplete" = $1 WHERE "id" = $2;