import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.less']
})
export class AssignmentTwoComponent implements OnInit {
  username: string = 'testing';
  isButtonEnabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.username = '';
  }
}
