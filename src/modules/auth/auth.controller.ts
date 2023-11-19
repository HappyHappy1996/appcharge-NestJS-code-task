import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/modules/auth/auth.dto';
import { AuthService } from 'src/modules/auth/auth.service';

@Controller('auth')
@ApiTags('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
