import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';

const routes: Route[] = [
  /* cv */
  { path: '', component: FirstComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color/:defaultColor/:color', component: ColorComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: DetailsCvComponent },
  { path: ':quelqueChose', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
