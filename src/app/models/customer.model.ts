export class Customer {
  name: string;
  gender: string;
  birthDate: Date;
  salary: number;
  address: string;
  isRip: boolean;

  constructor(
    name: string,
    gender: string = 'L',
    birthDate: Date,
    salary: number,
    address: string,
    isRip: boolean = false
  ) {
    this.name = name;
    this.gender = gender;
    this.birthDate = birthDate;
    this.salary = salary;
    this.address = address;
    this.isRip = isRip;
  }
}
