DROP DATABASE IF EXISTS more_homes;

CREATE DATABASE more_homes;

\c more_homes;

CREATE SEQUENCE homes_seq;

CREATE TABLE homes ( 
  id              INT DEFAULT NEXTVAL ('homes_seq'),
  img             VARCHAR(250),
  house_type      VARCHAR(25),
  location        VARCHAR(100),
  description     VARCHAR(100),
  cost_per_night  INT NOT NULL,
  rating          DECIMAL(5,2),
  votes           INT NOT NULL,
  PRIMARY KEY(id));

-- CREATE INDEX homes_location_index ON homes(location);

COPY homes(img,house_type,location,description,cost_per_night,rating,votes)
FROM '/home/cade/ghrsea07/ghrsea07-system-design-capstone/service-relatedhomes/data.csv'
DELIMITER ',' CSV;
