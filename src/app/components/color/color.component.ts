import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'red';

  /**
   *
   * The color representing the Div
   */
  divColor = this.defaultColor;

  /**
   * It change the div backgound color
   *
   * @param newColor: string
   */
  changeColor(newColor: string) {
    this.divColor = newColor;
  }
}
