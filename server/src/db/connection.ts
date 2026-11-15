import sql from "mssql";

interface I {
    isConnected: boolean;
    pool: sql.ConnectionPool | null;
}

const connection: I = {
    isConnected: false,
    pool: null
}

async function dbConnection() {
    try {
        if (connection.isConnected) {
            console.log("db is already connected.");
            return connection.pool;
        }
        const sqlConnection = await sql.connect(process.env.SQL_CONN as string);

        connection.isConnected = sqlConnection.connected;
        connection.pool = sqlConnection;

        console.log("db connected successfully.");
        return connection.pool;
    } catch (error) {
        console.log("Something went wrong while dbconnection in dbConnection function", error);
    };
};

export default dbConnection;