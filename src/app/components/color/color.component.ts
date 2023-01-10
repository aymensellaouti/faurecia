import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';

  /**
   *
   * The color representing the Div
   */
  divColor = '';

  /**
   * It change the div backgound color
   *
   * @param newColor: string
   */

  constructor() {
    console.log('In constructor', this.defaultColor);
  }

  ngOnInit(): void {
    console.log('In ngOnInit', this.defaultColor);
    this.divColor = this.defaultColor;
  }

  changeColor(newColor: string) {
    this.divColor = newColor;
  }
}
