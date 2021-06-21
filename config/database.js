const pgp = require('pg-promise')();

const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const host = process.env.PG_HOST;
const pgPort = process.env.PG_PORT;
const database = 'mrcoffee_p4';

const connection = `postgres://${user}:${password}@${host}:${pgPort}/${database}`;
const db = pgp(connection);

module.exports = db;
