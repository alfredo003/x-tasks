import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Milistone } from "./Milistone";

@Entity("tasks")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  milistone_id: string;

  @Column()
  status: string;

  @ManyToOne(()=>Milistone)
  @JoinColumn({name:"milistone_id"})
   milistone:Milistone

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
