import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { OrderService } from './order.service';
import { OrderDto } from 'src/modules/order/order.dto';

@Controller('orders')
@UseGuards(AuthGuard)
@ApiTags('orders')
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post('/')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async makeOrder(@Body() orderDto: OrderDto) {
    return this.service.makeOrder(orderDto);
  }
}
