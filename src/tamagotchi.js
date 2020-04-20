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
    }, 20000)
  }
}

// Attention decreases every 10 seconds (10,000) 
// Hunger decreases every 20 seconds (20,000)
// Rest decreases every 30 seconds (30,000)