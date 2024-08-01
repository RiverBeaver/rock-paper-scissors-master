import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  @Input() typeSign: string = '';
  @Input() isSelectingSign: boolean = false;
}
