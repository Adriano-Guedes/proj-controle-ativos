import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCargoDto {
  @IsNotEmpty({ message: "O nome do cargo é obrigatório" })
  @IsString()
  @MaxLength(100)
  nome!: string;
}
