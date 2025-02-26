import mysql2 from "mysql2";
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "test",
});

export default defineEventHandler((event: any) => {
  return new Promise(async (resolve, reject) => {
    const name = await useStorage("redis").getItem("name");
    console.log("redis 数据", name);
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
});
