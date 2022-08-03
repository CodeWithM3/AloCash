"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("../src/database/dbConnection"));
require('dotenv').config();
const app = (0, express_1.default)();
(0, dbConnection_1.default)();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
