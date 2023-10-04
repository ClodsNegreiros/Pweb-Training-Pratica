export class Trainer {
  private id: number;
  private nome: string;
  private email: string;
  private telefone: string;

  constructor(id: number, nome: string, email: string, telefone: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  get _id(): number {
    return this.id;
  }

  set _id(id: number) {
    this.id = id;
  }

  get _nome(): string {
    return this.nome;
  }

  set _nome(nome: string) {
    this.nome = nome;
  }

  get _email(): string {
    return this.email;
  }

  set _email(email: string) {
    this.email = email;
  }

  get _telefone(): string {
    return this.telefone;
  }

  set _telefone(telefone: string) {
    this.telefone = telefone;
  }
}
