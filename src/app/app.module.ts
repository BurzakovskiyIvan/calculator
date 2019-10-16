import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { ActionsService } from './modules/calculator/services/actions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [
    ActionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
