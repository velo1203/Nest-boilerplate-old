import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
}

export class RegisterDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
