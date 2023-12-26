export class Viewer {
  public firstname: string;
  public lastname: string;
  public birthdate: string;
  public id: string;
  static id: any;

  constructor(firstname: string, lastname: string, birthdate: string, id: any) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.id = id;
  }
}
