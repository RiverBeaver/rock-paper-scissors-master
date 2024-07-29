import { Component } from '@angular/core';

@Component({
  selector: 'app-score-counter',
  templateUrl: './score-counter.component.html',
  styleUrls: ['./score-counter.component.scss']
})
export class ScoreCounterComponent {
  score: number = 0;
}
