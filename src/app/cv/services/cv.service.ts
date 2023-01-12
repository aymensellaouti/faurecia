import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];

  constructor() {
    this.cvs = [
      new Cv(1, 'aymen', 'sellaouti', 'teacher', 'as.jpg', '1234', 40),
      new Cv(2, 'skander', 'sellaouti', 'enfant', '       ', '1234', 4),
    ];
  }

  /**
   *
   * Retourne la liste des cvs
   *
   * @returns CV[]
   *
   */
  getCvs(): Cv[] {
    return this.cvs;
  }
}
