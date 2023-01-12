import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './components/login/login.component';

const routes: Route[] = [
  /* cv */
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'todo', component: TodoComponent },
      { path: 'word', component: MiniWordComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'color/:defaultColor/:color', component: ColorComponent },
    ],
  },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: DetailsCvComponent },
  { path: ':quelqueChose', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
