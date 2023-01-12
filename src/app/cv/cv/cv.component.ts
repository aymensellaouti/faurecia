import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  date = new Date();

  constructor(
    private logger: LoggerService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvs = this.cvService.getCvs();
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
  }

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
