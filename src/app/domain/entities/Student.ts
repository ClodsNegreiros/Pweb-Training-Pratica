export class Student {
  private id: number;
  private nome: string;
  private email: string;
  private telefone: string;
  // private treinadorId: number;

  constructor(id: number, nome: string, email: string, telefone: string, treinadorId: number) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    // this.treinadorId = treinadorId;
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
