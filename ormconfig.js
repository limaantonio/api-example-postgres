module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  host: "",
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  port: 5432,
  username: "postgres",
  password: "1375",
  database: "postgres",
  migrations: ["./dist/database/migrations/*.js"],
  entities: ["./dist/entities/*.js"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
