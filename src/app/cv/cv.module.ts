import { NgModule } from '@angular/core';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CvRoutinModule } from './cv-routing.module';

@NgModule({
  declarations: [
    CvComponent,
    ListComponent,
    ItemComponent,
    CvCardComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    DetailsCvComponent,
    AddCvComponent,
  ],
  imports: [CommonModule, FormsModule, CvRoutinModule],
  exports: [],
  providers: [],
})
export class CvModule {}
