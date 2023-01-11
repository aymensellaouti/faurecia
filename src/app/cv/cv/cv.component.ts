import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor() {
    this.cvs = [
      new Cv(
        1,
        'aymen',
        'sellaouti',
        'teacher',
        'rotating_card_profile2.png',
        '1234',
        40
      ),
      new Cv(
        2,
        'skander',
        'sellaouti',
        'enfant',
        'rotating_card_profile3.png',
        '1234',
        4
      ),
    ];
  }

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
