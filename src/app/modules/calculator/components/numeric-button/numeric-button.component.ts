import { Component, OnInit, Input } from '@angular/core';
import { Button } from '../../button';
import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'app-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.less']
})
export class NumericButtonComponent implements OnInit {
  @Input() button: Button;

  constructor(
    private actionsService: ActionsService
  ) { }

  ngOnInit() {
  }

  public onNumericButtonClick(button: string): void {
    this.actionsService.updateOutput(button);
  }

}
