import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";


@Entity("connections")
class Connection{

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    user_id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    socket_id: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor (){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Connection }