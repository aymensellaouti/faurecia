import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { NF404Component } from '../components/nf404/nf404.component';

const routes: Route[] = [
  {
    path: '',
    component: CvComponent,
  },
  { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
  { path: ':id', component: DetailsCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutinModule {}
