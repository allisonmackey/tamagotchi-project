import {Animal} from './../src/tamagotchi.js'

describe("Animal", () => {
  jest.useFakeTimers();
  let animal1;

  beforeEach(function() {
    animal1 = new Animal(10, 10, 10)
    animal1.timedDecrease();
  })

  test("should verify that the Animal constuctor is createing an object with the properties hunger, rest, and attention", () => {
    expect(typeof(animal1.hunger)).toEqual("number");
    expect(typeof(animal1.rest)).toEqual("number");
    expect(typeof(animal1.attention)).toEqual("number");
  })

  test("creates a method that checks on the status of the animal object", () => {
    animal1.statusCheck();
    expect(animal1.hunger).toEqual(10);
    expect(animal1.rest).toEqual(10);
    expect(animal1.attention).toEqual(10);
  });

  test("should verify that our timedDecrease method decreases the hunger property as expected", () => {
    jest.advanceTimersByTime(20001)
    expect(animal1.hunger).toEqual(9)    
  })

  test("should verify that our timedDecrease method decreases the rest property as expected", () => {
    jest.advanceTimersByTime(30001);
    expect(animal1.rest).toEqual(9);
  })

  test("should verify that our timedDecrease method decreases the attention property as expected", () => {
    jest.advanceTimersByTime(10001);
    expect(animal1.attention).toEqual(9);
  })

  test("should verify that the feed method increses the hunger property of animial object", () => {
    animal1.feed();
    expect(animal1.hunger).toEqual(11);
  })

  test("should verify that the hunger property cannot be increased above 21 using the feed method", () => {
    let animal2 = new Animal(21, 21, 21)
    animal2.feed();
    expect(animal2.hunger).toEqual(21);
  })

  test("should verify that the sleep method increses the rest property of animial object", () => {
    animal1.sleep();
    expect(animal1.rest).toEqual(11);
  })

})