import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

export interface Product {
  amount: number;
  sku: string;
  name: string;
}

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameId: string;

  @Column()
  offerSetName: string;

  @Column()
  offerSetId: string;

  @Column()
  sku: string;

  @Column()
  availability: number;

  @Column()
  priceInCents: number;

  @Column()
  currency: string;

  @Column({ type: 'jsonb' })
  products: Product[];
}
