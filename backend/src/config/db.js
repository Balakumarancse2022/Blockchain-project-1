import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "securelandx",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

try {
  const connection = await db.getConnection();
  console.log("✅ MySQL connected successfully");
  connection.release();
} catch (error) {
  console.error("❌ MySQL connection failed:", error.message);
  process.exit(1);
}

export default db;
