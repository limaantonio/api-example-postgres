module.exports = {
  type: "",
  url: "",
  //so usar se for em produção
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  host: "",
  port: 5432,
  username: "",
  password: "",
  database: "",
  migrations: ["./dist/database/migrations/*.js"],
  entities: ["./dist/entities/*.js"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
