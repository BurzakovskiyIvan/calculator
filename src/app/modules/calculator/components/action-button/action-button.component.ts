import { Component, OnInit, Input } from '@angular/core';
import { Button } from '../../button';
import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.less']
})
export class ActionButtonComponent implements OnInit {
  @Input() button: Button;

  constructor(
    private actionsService: ActionsService
  ) { }

  ngOnInit() {
  }

  public onActionButtonClick(button: string): void {
    this.actionsService.onActionButtonClick(button);
  }

}
