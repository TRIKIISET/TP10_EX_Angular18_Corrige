import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-public-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.css'
})
export class PublicMenuComponent {

}
