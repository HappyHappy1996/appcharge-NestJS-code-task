import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  playerId: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginResponse {
  // jwt token
  sessionId: string;
}
