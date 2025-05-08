import { IsNotEmpty, IsOptional, IsString, IsInt, IsDateString } from "class-validator";

export class CreateHistoricoAlocacaoDto {
  @IsNotEmpty({ message: "A chave do ativo é obrigatória" })
  @IsInt()
  chaveAtivo!: number;

  @IsNotEmpty({ message: "A data é obrigatória" })
  @IsDateString({}, { message: "Data inválida" })
  data!: string;

  @IsOptional()
  @IsInt()
  chaveLocalizacaoOrigem?: number;

  @IsOptional()
  @IsString()
  chaveResponsavelOrigem?: string;

  @IsOptional()
  @IsInt()
  chaveLocalizacaoDestino?: number;

  @IsOptional()
  @IsString()
  chaveResponsavelDestino?: string;
}
