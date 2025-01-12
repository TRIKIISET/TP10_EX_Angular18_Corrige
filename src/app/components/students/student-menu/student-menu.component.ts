import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './student-menu.component.html',
  styleUrl: './student-menu.component.css'
})
export class StudentMenuComponent {
  router: Router= inject(Router);
  onDisconnect(){
    localStorage.setItem('espace', 'forbidden');
    this.router.navigate(['/extranet'])

  }

}
