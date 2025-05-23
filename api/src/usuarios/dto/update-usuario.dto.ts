import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, Matches, IsUUID, IsInt } from "class-validator";

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nome?: string;

  @IsOptional()
  @IsEmail({}, { message: "Email inválido" })
  @MaxLength(150)
  email?: string;

  @IsOptional()
  @IsInt()
  chaveCargo?: number;
}
