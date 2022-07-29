//Camila Miranda Barbosa  ID:991622796
//SYST24444 Mobile Web-Based Application Development
//Summer 29-July 2022
//Assignment03

import { Component } from '@angular/core';
import { Die } from './die';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'assignment3';
  dice: Array<Die> = [new Die()];
  numberOfDice: number = 1;
  total: number = 1;

  rollDice() {
    console.log('Rolling the dice');
    let totalPoint = 0;
    this.dice.forEach((die) => {
      die.rollDie();
      totalPoint += die.getSide();
    });
    this.total = totalPoint;
  }

  changeNumberOfDice(e: any) {
    console.log('Change number of Dice for ', e.target.value);
    this.numberOfDice = e.target.value;
    this.dice = new Array(this.numberOfDice);
    let totalPoint = 0;
    for (let i = 0; i < this.numberOfDice; i++) {
      let die = new Die();
      die.rollDie();
      totalPoint += die.getSide();
      this.dice[i] = die;
    }

    this.total = totalPoint;
  }
}
