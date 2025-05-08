import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, Matches, IsUUID, IsInt } from "class-validator";

export class CreateUsuarioDto {
  @IsNotEmpty({ message: "O nome é obrigatório" })
  @IsString()
  @MaxLength(100)
  nome!: string;

  @IsNotEmpty({ message: "O email é obrigatório" })
  @IsEmail({}, { message: "Email inválido" })
  @MaxLength(150)
  email!: string;

  @IsNotEmpty({ message: "O login é obrigatório" })
  @IsString()
  @MaxLength(50)
  login!: string;

  @IsNotEmpty({ message: "A senha é obrigatória" })
  @MinLength(8, { message: "Senha deve ter no mínimo 8 caracteres" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/, { message: "Senha deve ter pelo menos uma letra maiúscula, uma minúscula e um caractere especial" })
  senha!: string;

  @IsOptional()
  @IsInt()
  chaveCargo?: number;
}
