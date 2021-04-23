import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryColumn()
  // @ts-ignore
  id: string;

  @Column()
  // @ts-ignore
  name?: string;

  @Column()
  // @ts-ignore
  age?: number;
}
