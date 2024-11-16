"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondbTest_owner:ZDtegO0X6Qif@ep-soft-base-a5obciqa.us-east-2.aws.neon.tech/neondbTest?sslmode=require"
});
function endConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.end();
        console.log('Ended connection');
    });
}
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const res = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );  
    `);
        console.log(res);
        yield client.end();
    });
}
function insertUsersTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success', res);
        }
        catch (err) {
            console.error('Error during insertion', err);
        }
        finally {
            yield client.end();
        }
    });
}
function getUsersTable(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = 'SELECT * FROM USERS WHERE email = $1';
            const value = [email];
            const res = yield client.query(query, value);
            if (res.rows.length > 0) {
                console.log('User found: ', res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log("No user found with given email");
                return null;
            }
        }
        catch (err) {
            console.log("Error during fetching user", err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
// endConnect();
// insertUsersTable('username5', 'user5@example.com', 'user_password').catch(console.error);
getUsersTable('user5@example.com').catch(console.error);
// createUsersTable();
