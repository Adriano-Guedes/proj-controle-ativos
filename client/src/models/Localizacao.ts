export type LocalizacaoGet = {
    id: number;
    endereco: string;
    descricao?: string | null;
}

export type LocalizacaoCreate = {
    endereco: string;
    descricao?: string | null;
}

export type LocalizacaoUpdate = {
    id: number;
    endereco: string;
    descricao?: string | null;
}