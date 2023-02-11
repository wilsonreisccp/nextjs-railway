export interface Todo {
  id: string;
  created: string;
  text: string;
  completed: boolean;
}

export interface Dizimista {
  id: number;
  nome: string;
  dt_nascimento: string;
  sexo: string;
  telefone: string | null;
  celular: string | null;
  email: string | null;
  ativo: boolean;
  lougradouro: string | null;
  numero: string | null;
  complemento: string | null;
  bairro: string | null;
  cidade: string | null;
  cep: string | null;
  created_at: string | null;
  updated_at: string | null;
  controle: number | null;
  observacao: string | null;
}
