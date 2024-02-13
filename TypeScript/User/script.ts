class Person {
  private yearOfBirth: number;
  private age: number;
  private name: string;

  constructor(yearOfBirth: number, age: number, name: string) {
    this.yearOfBirth = yearOfBirth;
    this.age = age;
    this.name = name;
  }

  public display(): void {
    console.log(`Year of Birth: ${this.yearOfBirth}`);
    console.log(`Age: ${this.age}`);
    console.log(`Name: ${this.name}`);
  }
}

let person = new Person(1999, 26, "Ofir");
person.display();
