import { DataSource } from "typeorm"
import { Milistone } from "../models/Milistone";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alfredo",
  password: "alfredo03",
  database: "xtasks_db",
  entities: [Milistone],
  migrations:[
    "./src/database/migrations/*.ts" 
   ]
});
