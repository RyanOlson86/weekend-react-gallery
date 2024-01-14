CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/squirrel.jpg', 'Squirrel!', 'Photo of a squirrel cracking a nut.'),
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');

UPDATE "gallery" SET likes= likes + 1 WHERE id=1;