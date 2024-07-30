import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonRulesComponent } from './button-rules/button-rules.component';
import { ModalRulesComponent } from './modal-rules/modal-rules.component';
import { RulesComponent } from './rules.component';

@NgModule({
  declarations: [ButtonRulesComponent, ModalRulesComponent, RulesComponent],
  imports: [CommonModule],
  exports: [RulesComponent],
})
export class RulesModule {}
