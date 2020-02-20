#! /bin/sh
cd /home/cade/ghrsea07/ghrsea07-system-design-capstone/service-relatedhomes/db/ArangoDB
arangoimport --file "data_id_headers.csv" --type csv --collection "homes" --server.database "more_homes" --translate "id=_key"