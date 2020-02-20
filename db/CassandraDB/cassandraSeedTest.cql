DROP KEYSPACE IF EXISTS my_test;

CREATE KEYSPACE my_test
WITH REPLICATION = {
  'class':'SimpleStrategy', 
  'replication_factor': 1
};

USE my_test;

CREATE TABLE test (
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

COPY my_test.test(id,img,house_type,location,description,cost_per_night,rating,votes)
FROM '/home/cade/ghrsea07/ghrsea07-system-design-capstone/service-relatedhomes/data_sample_id.csv'
WITH DELIMITER=',' AND HEADER=FALSE;