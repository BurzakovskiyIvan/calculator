import { Component, OnInit } from '@angular/core';
import { Button } from '../../button';
import { NUMERIC_BUTTONS, ACTION_BUTTONS } from '../../constants/buttons';

@Component({
  selector: 'app-buttons-field',
  templateUrl: './buttons-field.component.html',
  styleUrls: ['./buttons-field.component.less']
})
export class ButtonsFieldComponent implements OnInit {
  public actionButtons: Button[] = [];
  public numericButtons: Button[] = [];

  constructor() { }

  ngOnInit() {
    this.getActionButtons();
    this.getNumericButtons();
  }

  private getActionButtons(): void {
    ACTION_BUTTONS.forEach((button: Button) => {
      this.actionButtons.push(button);
    });
  }

  private getNumericButtons(): void {
    NUMERIC_BUTTONS.forEach((button: Button) => {
      this.numericButtons.push(button);
    });
    this.numericButtons.reverse();
  }

}
