import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-result',
  templateUrl: './getting-result.component.html',
  styleUrls: ['./getting-result.component.scss'],
})
export class GettingResultComponent {
  public usersSign: string = 'scissors';
  public computerSign: string = 'without';

  constructor() {
    setTimeout(() => {
      this.computerSign = 'paper';
    }, 1000);
  }
}
