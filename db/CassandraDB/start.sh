#! /bin/sh
cd ~/temp/cassandra/bin
# ./cassandra & BACK_PID=$!
# wait $BACK_PID
./cqlsh<<EOF
SOURCE '/home/cade/ghrsea07/ghrsea07-system-design-capstone/service-relatedhomes/db/CassandraDB/cassandraSeedTest.cql'
EOF
exit 0

