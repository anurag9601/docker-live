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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const connection = {
    isConnected: false,
    pool: null
};
function dbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (connection.isConnected) {
                console.log("db is already connected.");
                return connection.pool;
            }
            const sqlConnection = yield mssql_1.default.connect(process.env.SQL_CONN);
            connection.isConnected = sqlConnection.connected;
            connection.pool = sqlConnection;
            console.log("db connected successfully.");
            return connection.pool;
        }
        catch (error) {
            console.log("Something went wrong while dbconnection in dbConnection function", error);
        }
        ;
    });
}
;
exports.default = dbConnection;
