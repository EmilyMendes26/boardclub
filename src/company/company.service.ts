import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private CompanysRepository: Repository<Company>,
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    const Company = this.CompanysRepository.create(createCompanyDto);
    return this.CompanysRepository.save(Company);
  }

  findAll() {
    return this.CompanysRepository.find();
  }

  findOne(id: number) {
    return this.CompanysRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.CompanysRepository.delete(id);
  }
}
