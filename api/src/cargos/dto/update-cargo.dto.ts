import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UpdateCargoDto {
  @IsNotEmpty({ message: "O nome do cargo é obrigatório" })
  @IsString()
  @MaxLength(100)
  nome!: string;
}