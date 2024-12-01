import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("milistones")
class Milistone
{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    title:string;

    @Column('time with time zone')
    date:Date;
}

export default Milistone;