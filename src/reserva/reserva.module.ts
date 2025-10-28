import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaEntity } from './entities/reserva.entity';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaEntity])],
  controllers: [ReservaController],
  providers: [ReservaService],
})
export class ReservaModule {}