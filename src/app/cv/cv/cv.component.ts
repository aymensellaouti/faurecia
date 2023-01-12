import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
  ) {
    this.cvs = [
      new Cv(1, 'aymen', 'sellaouti', 'teacher', 'as.jpg', '1234', 40),
      new Cv(2, 'skander', 'sellaouti', 'enfant', '       ', '1234', 4),
    ];
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
  }

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
