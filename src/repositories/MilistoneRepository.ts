import { Repository } from "typeorm";
import { AppDataSource } from "../database";
import {Milistone} from "../models/Milistone";

export const MilistoneRepository: Repository<Milistone> = AppDataSource.getRepository(Milistone);
