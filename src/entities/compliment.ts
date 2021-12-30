import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateQueryBuilder } from "typeorm";
import {v4 as uuid} from "uuid"

import {tag} from "./tag"
import { User } from "./User";


@Entity("compliments")

class compliment {
   @PrimaryColumn()
   readonly id:string;

   @Column()
   user_sender:string;

   @JoinColumn({name:"user_sender"})
   @ManyToOne(()=> User)
   userSend = User;


   @Column()
   user_receiver: string;

   @JoinColumn({name:"user_receiver"})
   @ManyToOne(()=> User)
   userReceive = User;

   
   
   @Column()
   tag_id:string;

   @JoinColumn({name: "tag_id"})
   @ManyToOne(() => tag)
    Tag: tag; 

   @Column()
   message:string;

   @CreateDateColumn()
   created_at:Date;

   @CreateDateColumn()
   updated_at:Date;


   constructor(){
       if(!this.id){
           this.id = uuid();
       }
   }

}


export {compliment}