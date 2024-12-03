import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alfredo",
  password: "alfredo03",
  database: "xtasks_db",
  entities: ["./src/models/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});
