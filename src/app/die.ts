//Camila Miranda Barbosa  ID:991622796
//SYST24444 Mobile Web-Based Application Development
//Summer 29-July 2022
//Assignment03

export class Die {
  private side: number;

  constructor(side: number = 1) {
    this.side = side;
  }

  rollDie() {
    console.log('rollDie is called');
    this.side = Math.floor(1 + 6 * Math.random());
  }

  getSide() {
    console.log('getSide() is called');
    return this.side;
  }

  setSide(side: number) {
    console.log('setSide  is called');
    console.log(`side=${side}`);
    console.assert(side > 0, 'side must be > 0');
    console.assert(side <= 6, 'side must be <= 6');
    this.side = side;
  }
}
