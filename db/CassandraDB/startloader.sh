cd ~/temp
./cassandra-loader -host localhost -f /home/cade/ghrsea07/ghrsea07-system-design-capstone/service-relatedhomes/db/CassandraDB/data_id.csv -schema "more_homes.homes(id,img,house_type,location,description,cost_per_night,rating,votes)"