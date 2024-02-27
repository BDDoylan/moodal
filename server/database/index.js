import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import "dotenv/config";

const client = new pg.Client({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

await client
	.connect()
	.then(() => {
		console.log("Database connection established");
	})
	.catch((err) => {
		console.log(err);
	});

const db = drizzle(client);

export default db;
