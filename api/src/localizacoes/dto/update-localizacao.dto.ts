import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateLocalizacaoDto {
  @IsNotEmpty({ message: "O endereço é obrigatório" })
  @IsString()
  @MaxLength(255)
  endereco!: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
