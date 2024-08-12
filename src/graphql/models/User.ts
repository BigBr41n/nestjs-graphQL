import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSettings } from './UsersSettings';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  displayname?: string;

  @OneToOne(() => UserSettings)
  @JoinColumn()
  @Field({ nullable: true })
  settings?: UserSettings;
}
