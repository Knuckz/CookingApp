import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.less']
})
export class AssignmentThreeComponent implements OnInit {
  isDisplayEnabled: boolean = true;
  numButtonClicks: number = 0;
  dwarfWarriors: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isDisplayEnabled = !this.isDisplayEnabled;
    this.numButtonClicks++;
    this.dwarfWarriors.push(this.numButtonClicks);
  }
}
