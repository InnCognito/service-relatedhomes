DROP KEYSPACE IF EXISTS more_homes;

CREATE KEYSPACE more_homes
WITH REPLICATION = {
  'class':'SimpleStrategy', 
  'replication_factor': 1
};

USE more_homes;

CREATE TABLE homes (
  id int,
  img text,
  house_type text,
  location text,
  description text,
  cost_per_night int,
  rating decimal,
  votes int,
  PRIMARY KEY(id)
);

COPY more_homes.homes(id,img,house_type,location,description,cost_per_night,rating,votes)
FROM '/home/cade/ghrsea07/ghrsea07-system-design-capstone/service-relatedhomes/db/CassandraDB/data_id.csv'
WITH DELIMITER=',' AND HEADER=FALSE;