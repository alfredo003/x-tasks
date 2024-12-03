import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("milistones")
export class Milistone
{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    title:string;

    @Column('time with time zone')
    date:Date;
}
