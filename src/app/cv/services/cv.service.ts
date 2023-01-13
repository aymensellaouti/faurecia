import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Subject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  private selectCvSubject = new Subject<Cv>();

  /**
   *
   * Si vous voulez avoir le cv sélectionné inscrivez vous ici
   *
   */
  selectCv$ = this.selectCvSubject.asObservable().pipe(distinctUntilChanged());
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

  /**
   *
   * Cherche un cv avec son id
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   *
   * Emet le cv sélectionné à tous les observateurs
   *
   * @param cv: Cv
   *
   */
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
