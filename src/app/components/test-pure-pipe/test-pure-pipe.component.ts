import { Component } from '@angular/core';



@Component({
  selector: 'app-test-pure-pipe',
  templateUrl: './test-pure-pipe.component.html',
  styleUrls: ['./test-pure-pipe.component.css'],
})
export class TestPurePipeComponent {
  values: number[] = [];
  message = '';
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.values.push(Math.ceil(Math.random() * 5 + 1));
    }
  }
}
