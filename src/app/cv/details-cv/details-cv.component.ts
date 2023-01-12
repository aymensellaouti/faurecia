import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from '../../../config/routes.config';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;

  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.cvService.findCvById(params['id']);
      if (!this.cv) this.router.navigate([APP_ROUTES.cv]);
    });
  }
  deleteCv() {
    if (this.cv) {
      if (this.cvService.deleteCv(this.cv)) {
        this.toastr.success(`${this.cv.name} supprimé avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      } else {
        this.toastr.success(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }
    }
  }
}
