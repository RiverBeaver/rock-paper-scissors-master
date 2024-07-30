import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SelectingSignComponent } from './selecting-sign/selecting-sign.component';

@NgModule({
  declarations: [MainComponent, SelectingSignComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class MainModule {}
