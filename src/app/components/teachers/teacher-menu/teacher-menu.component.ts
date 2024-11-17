import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-teacher-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './teacher-menu.component.html',
  styleUrl: './teacher-menu.component.css'
})
export class TeacherMenuComponent {

  router: Router= inject(Router);
  onDisconnect(){
    localStorage.setItem('espace', 'forbidden');
    this.router.navigate(['/extranet'])

  }

}
