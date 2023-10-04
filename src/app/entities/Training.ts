export class Training {
  private id: number;
  private name: string;
  private description: string;
  private startDate: Date;
  private endDate: Date;

  constructor(id: number, name: string, description: string, startDate: Date, endDate: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  get _id(): number {
    return this.id;
  }

  set _id(id: number) {
    this.id = id;
  }

  get _name(): string {
    return this.name;
  }

  set _name(name: string) {
    this.name = name;
  }

  get _description(): string {
    return this.description;
  }

  set _description(description: string) {
    this.description = description;
  }

  get _startDate(): Date {
    return this.startDate;
  }

  set _startDate(startDate: Date) {
    this.startDate = startDate;
  }

  get _endDate(): Date {
    return this.endDate;
  }

  set _endDate(endDate: Date) {
    this.endDate = endDate;
  }

  // get _studentId(): number {
  //   return this.studentId
  // }

  // set _studentId(studentId: number) {
  //   this.studentId = studentId;
  // }
}
