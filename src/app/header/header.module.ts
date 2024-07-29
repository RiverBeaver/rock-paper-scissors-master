import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ScoreCounterComponent } from './score-counter/score-counter.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ScoreCounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
