import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class DataObject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  jsonString: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
