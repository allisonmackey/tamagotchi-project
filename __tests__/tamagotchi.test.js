import {Animal} from './../src/tamagotchi.js'

describe("Animal", () => {

  test("should verify that the Animal constuctor is createing an object with the properties hunger, rest, and attention", () => {
    let animal1 = new Animal(10, 10, 10)
    expect(typeof(animal1.hunger)).toEqual("number");
    expect(typeof(animal1.rest)).toEqual("number");
    expect(typeof(animal1.attention)).toEqual("number");
  })

  test("creates a method that checks on the status of the animal object", () => {
    let animal1 = new Animal(10, 10, 10);
    animal1.statusCheck();
    expect(animal1.hunger).toEqual(10);
    expect(animal1.rest).toEqual(10);
    expect(animal1.attention).toEqual(10);
  });
})