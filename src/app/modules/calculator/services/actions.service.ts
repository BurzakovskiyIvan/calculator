import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private resultBehaviorSubject$: BehaviorSubject<string>;
  public result$: Observable<string>;

  constructor() {
    this.resultBehaviorSubject$ = new BehaviorSubject<string>('');
    this.result$ = this.resultBehaviorSubject$.asObservable();
  }

  public updateOutput(button: string): void {
    const output = this.resultBehaviorSubject$.getValue().toString().concat(button);
    this.emitResultValue(output); // remove the leading "0" if such exists
  }

  private emitResultValue(result: string): void {
    this.resultBehaviorSubject$.next(result);
  }

  public onActionButtonClick(button: string): void {
    switch (button) {
      case 'C':
        this.clearOutput();
        break;
      case '=':
        this.equal();
        break;
      default:
        this.updateOutput(button);
        break;
    }
  }

  private clearOutput(): void {
    this.emitResultValue('');
  }

  private equal(): void {
    const expression = this.resultBehaviorSubject$.getValue();
    // tslint:disable-next-line: no-eval
    this.emitResultValue(eval(expression).toString());
  }
}
