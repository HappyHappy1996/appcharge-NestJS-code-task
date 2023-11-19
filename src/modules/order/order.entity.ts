import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface CreditCard {
  amount: number;
  sku: string;
  name: string;
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  offerSetId: string;

  @Column({ type: 'jsonb' })
  creditCard: CreditCard;
}
