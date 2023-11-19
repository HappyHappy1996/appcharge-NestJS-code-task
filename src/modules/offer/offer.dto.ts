import {
  ArrayNotEmpty,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

export class OfferDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  gameId: string;

  @IsNotEmpty()
  @IsString()
  offerSetName: string;

  @IsNotEmpty()
  @IsString()
  offerSetId: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsDefined()
  @IsNumber()
  availability: number;

  @IsDefined()
  @IsNumber()
  priceInCents: number;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}

export class ProductDto {
  @IsDefined()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
