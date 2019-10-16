import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'app-output-field',
  templateUrl: './output-field.component.html',
  styleUrls: ['./output-field.component.less']
})
export class OutputFieldComponent implements OnInit {

  public result: string;

  constructor(
    private actionsService: ActionsService
  ) {
    this.actionsService.result$.subscribe((data) => {
      this.result = data;
    });
  }

  ngOnInit() {
  }

}
