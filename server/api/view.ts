import mysql2 from "mysql2";
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "test",
});

export default function defineEventHandler(event: any) {
  console.log(event);
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from person",
      function (err: any, results: any, fields: any) {
        if (err) {
          reject({
            code: 500,
            message: err,
          });
        } else {
          resolve({
            code: 200,
            data: results,
          });
        }
      }
    );
  });
}
