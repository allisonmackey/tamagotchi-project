//Business Logic 
export class Animal {
  constructor(hunger, rest, attention) {
    this.hunger = hunger;
    this.rest = rest;
    this.attention = attention;
  }  
  statusCheck() {
    return this; 
  }
  timedDecrease() {
    setInterval(() => {
      this.hunger --;
    }, 20000);
    setInterval(() => {
      this.rest --;
    }, 30000);
    setInterval(() => {
      this.attention --;
    }, 10000);
  }
  feed(){
    if(this.hunger < 21){
      this.hunger ++
    }
  }

  sleep(){
   if (this.rest < 21) {
    this.rest ++
   }
  }

}

// Attention decreases every 10 seconds (10,000) 
  // MAX level = 21 "you've reached the max"
  // MIN level = 1 "tamagotchi barely alive"
  // DEATH level = 0 "tamagotchi ded"
// Hunger decreases every 20 seconds (20,000) 
  // MAX food level = 21 & increases by 1 every click
  // MIN food level = 1 "tamagotchi is barely alive"
  // DEATH level = 0 "tamagotchi ded now"
// Rest decreases every 30 seconds (30,000)
  // MAX rest level = 
  // MIN rest level = 1 "tamagotchi is barely alive!"