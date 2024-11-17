import { Component } from '@angular/core';
import { TeacherMenuComponent } from "../teacher-menu/teacher-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teachers-dash',
  standalone: true,
  imports: [TeacherMenuComponent, RouterOutlet],
  templateUrl: './teachers-dash.component.html',
  styleUrl: './teachers-dash.component.css'
})
export class TeachersDashComponent {

}
