import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreditCardDto {
  @IsNotEmpty()
  @IsString()
  issuer: string;

  @IsDefined()
  @IsNumber()
  cardNumber: number;

  @IsNotEmpty()
  @IsString()
  exp: string;

  @IsDefined()
  @IsNumber()
  cvv: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  zipcode: string;
}

export class OrderDto {
  @IsNotEmpty()
  @IsString()
  offerSetId: string;

  @ValidateNested()
  @Type(() => CreditCardDto)
  creditCard: CreditCardDto;
}
