class Person {
  private age: number;
  private name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  private getYearOfBirth(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }

  public display(): void {
    console.log(`Year of Birth: ${this.getYearOfBirth()}\nAge: ${this.age}\nName: ${this.name}`);
  }
}

let person = new Person(24, "Ofir");
person.display();

console.log("\n");

class Animal {
  private name: string;
  private age: number;
  private type?: string;

  constructor(name: string, age: number, type?: string) {
    this.name = name;
    this.age = age;
    // this.type = type;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getType(): string | undefined {
    return this.type;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public display(): void {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nType: ${this.type ? this.type : "Unknown"}`);
  }
}

let animal = new Animal("Dog", 5);
animal.display();

console.log("\n");

animal.setName("Cat");
animal.setAge(3);
animal.setType("Mammal");
animal.display();

console.log("\n");

console.log(animal.getType(), animal.getName(), animal.getAge());
