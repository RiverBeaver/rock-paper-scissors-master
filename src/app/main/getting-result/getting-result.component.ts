import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-result',
  templateUrl: './getting-result.component.html',
  styleUrls: ['./getting-result.component.scss'],
})
export class GettingResultComponent {
  constructor() {
    setTimeout(() => {
      const elem = document.querySelector('.picked.house .without');
      elem?.classList.add('scissors');
      elem?.classList.remove('without');
    }, 1000);
  }
}
