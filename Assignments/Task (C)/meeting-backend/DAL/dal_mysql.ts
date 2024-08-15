import mysql from "mysql2";
import config from "../Utils/DatabaseConfig";

const connection = mysql.createPool({
  host: config.mySQLHost,
  user: config.mySQLUser,
  password: config.mySQLPassword,
  database: config.mySQLDatabase,
});

console.log("Connected to MySQL database");

const execute = (sql: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};

export default { execute };
