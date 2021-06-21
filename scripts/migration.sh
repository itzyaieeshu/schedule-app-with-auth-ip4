psql -h localhost -f sql/migrations/create_db.sql
psql -h localhost -d mrcoffee_p4 -f sql/migrations/create_users.sql
psql -h localhost -d mrcoffee_p4 -f sql/migrations/create_schedules.sql