import {
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
  IsPhoneNumber,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'The name field should not be empty.' })
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword(
    {},
    {
      message:
        'A senha é muito fraca. Ela deve conter letras maiúsculas, minúsculas, números e símbolos.',
    },
  )
  password: string;

  //@IsPhoneNumber(undefined, { message: 'O numero deve conter DD do pais' })
  @IsString()
  telefone: string;
}
