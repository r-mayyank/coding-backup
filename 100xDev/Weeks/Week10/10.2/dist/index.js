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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email: username
            },
            select: {
                email: true,
                firstName: true,
                lastName: true
            }
        });
        console.log(`Email: ${res === null || res === void 0 ? void 0 : res.email}
First Name: ${res === null || res === void 0 ? void 0 : res.firstName}
Last Name: ${res === null || res === void 0 ? void 0 : res.lastName}`);
    });
}
function deleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: {
                email: username
            }
        });
        console.log(`Deleted user with credentials: ${res}`);
    });
}
// deleteUser("mayank@gmail.com");
// updateUser("mayank@gmail.com", {
// firstName: "may",
// lastName: "raja"
// })
// insertUser("mayank@gmail.com", "mayank123", "mayank", "raja")
getUser("mayank@gmail.com");
