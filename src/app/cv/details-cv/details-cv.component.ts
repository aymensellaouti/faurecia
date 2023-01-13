import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from '../../../config/routes.config';
import { switchMap, Observable, catchError, EMPTY } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv$: Observable<Cv>;
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    public authService: AuthService
  ) {
    this.cv$ = this.activatedRoute.params.pipe(
      switchMap((param) => this.cvService.getCvById(param['id'])),
      catchError((e) => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    );
  }

  ngOnInit() {
    /* this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvById(params['id']).subscribe({
        next: (cv) => {
          this.cv = cv;
        },
        error: (e) => {
          this.router.navigate([APP_ROUTES.cv]);
        },
      });
    }); */
  }
  deleteCv(cv: Cv) {
    this.cvService.deleteCvById(cv.id).subscribe({
      next: () => {
        this.toastr.success(`${cv.name} supprimé avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: () => {
        this.toastr.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      },
    });
    /*     if (this.cv) {
      if (this.cvService.deleteCv(this.cv)) {
        this.toastr.success(`${this.cv.name} supprimé avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      } else {
        this.toastr.success(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }
    } */
  }
}
