//Business Logic 
export class Animal {
  constructor(hunger, rest, attention) {
    this.hunger = hunger;
    this.rest = rest;
    this.attention = attention;
  }
  
  statusCheck() {
    if (this.hunger <= 0) {
      this.hungerStatus = "Your animal is dead!!"
    }else if (this.hunger <= 3) {
      this.hungerStatus = "Your animal is hungry!!"
    }

    if (this.rest <= 0) {
      this.restStatus = "Your animal is dead!!"
    } else if (this.rest <= 3) {
      this.restStatus = "Your animal is tired!!"
    } 

    if (this.attention <= 0) {
      this.attentionStatus = "Your animal is dead!!"
    } else if (this.attention <= 3) {
      this.attentionStatus = "Your animal is needy!!"
    } 
  };

  timedDecrease() {
    setInterval(() => {
      this.hunger--;
    }, 20000);
    setInterval(() => {
      this.rest--;
    }, 30000);
    setInterval(() => {
      this.attention--;
      this.statusCheck()
    }, 10000);

  }

  feed() {
    if (this.hunger < 21) {
      this.hunger++
    }
  }

  sleep() {
    if (this.rest < 21) {
      this.rest++
    }
  }

  love() {
    if (this.attention < 21) {
      this.attention++
    }
  }

}

// Attention decreases every 10 seconds (10,000) 
  // MAX level = 21 "you've reached the max"
  // LOW level = 3? "tamagotchi barely alive"
  // DEATH level = 0 "tamagotchi ded"
// Hunger decreases every 20 seconds (20,000) 
  // MAX level = 21 & increases by 1 every click
  // LOW level = 3 "tamagotchi is barely alive"
  // DEATH level = 0 "tamagotchi ded now"
// Rest decreases every 30 seconds (30,000)
  // MAX rest level = 21 
  // LOW level =  "tamagotchi is barely alive!"