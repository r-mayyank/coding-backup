import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://neondbTest_owner:ZDtegO0X6Qif@ep-soft-base-a5obciqa.us-east-2.aws.neon.tech/neondbTest?sslmode=require"
})

async function endConnect() {
  await client.end();
  console.log('Ended connection');
}

async function createUsersTable() {
  await client.connect();
  const res = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );eck: 
    `)
  console.log(res);
  await client.end();
}

async function insertUsersTable(username: string, email: string, password: string) {
  try {
    await client.connect();
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values)
    console.log('Insertion success', res);
  } catch (err) {
    console.error('Error during insertion', err);
  } finally {
    await client.end();
  }
}

async function getUsersTable(email: string) {
  try {
    await client.connect();
    const query = 'SELECT * FROM USERS WHERE email = $1';
    const value = [email]
    const res = await client.query(query, value)

    if (res.rows.length > 0) {
      console.log('User found: ', res.rows[0]);
      return res.rows[0];
    } else {
      console.log("No user found with given email");
      return null;
    }
  } catch (err) {
    console.log("Error during fetching user", err);
    throw err;
  } finally {
    await client.end();
  }
}
// endConnect();
// insertUsersTable('username5', 'user5@example.com', 'user_password').catch(console.error);
getUsersTable('user5@example.com').catch(console.error);
// createUsersTable();
