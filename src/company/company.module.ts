import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]) // <-- necessário!
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
  exports: [CompanyService] // se for usar em outro módulo
})
export class CompanyModule {}
