import { IsInt, IsNotEmpty, IsOptional, IsString, IsNumber, IsDecimal, Min, MaxLength, IsDateString } from "class-validator";

export class CreateAtivoDto {
  @IsNotEmpty({ message: "O nome é obrigatório" })
  @IsString()
  @MaxLength(100)
  nome!: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  codInterno?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsNotEmpty({ message: "O status é obrigatório" })
  @IsString()
  @MaxLength(50)
  status!: string;

  @IsNotEmpty({ message: "O valor é obrigatório" })
  @IsNumber({}, { message: "O valor deve ser numérico" })
  @Min(0)
  valor!: number;

  @IsNotEmpty({ message: "A data de aquisição é obrigatória" })
  @IsDateString({}, { message: "Data de aquisição inválida" })
  dataAquisicao!: string;

  @IsOptional()
  @IsString()
  observacao?: string;

  @IsOptional()
  @IsString()
  chaveResponsavel?: string;

  @IsOptional()
  @IsInt()
  chaveLocalizacao?: number;
}
