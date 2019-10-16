import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorPageComponent } from './components/calculator-page/calculator-page.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { OutputFieldComponent } from './components/output-field/output-field.component';
import { ButtonsFieldComponent } from './components/buttons-field/buttons-field.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { NumericButtonComponent } from './components/numeric-button/numeric-button.component';

@NgModule({
  declarations: [
    CalculatorPageComponent,
    CalculatorComponent,
    OutputFieldComponent,
    ButtonsFieldComponent,
    ActionButtonComponent,
    NumericButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorPageComponent
  ]
})
export class CalculatorModule { }
