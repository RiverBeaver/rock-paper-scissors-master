import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SelectingSignComponent } from './selecting-sign/selecting-sign.component';
import { GettingResultComponent } from './getting-result/getting-result.component';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [MainComponent, SelectingSignComponent, GettingResultComponent, SignComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class MainModule {}
