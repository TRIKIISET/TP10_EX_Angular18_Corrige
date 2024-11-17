import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { StudentMenuComponent } from '../student-menu/student-menu.component';


@Component({
  selector: 'app-student-dash',
  standalone: true,
  imports: [RouterOutlet, StudentMenuComponent],
  templateUrl: './student-dash.component.html',
  styleUrl: './student-dash.component.css'
})
export class StudentDashComponent {

}
