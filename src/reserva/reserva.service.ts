import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservaEntity } from './entities/reserva.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(ReservaEntity)
    private reservaRepo: Repository<ReservaEntity>,
  ) {}

  async criarReserva(reserva: Partial<ReservaEntity>) {
    return this.reservaRepo.save(reserva);
  }

  async listarReservas() {
    return this.reservaRepo.find();
  }
}
