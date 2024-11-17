import { Component } from '@angular/core';
import { PublicMenuComponent } from '../public-menu/public-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-dash',
  standalone: true,
  imports: [RouterOutlet, PublicMenuComponent],
  templateUrl: './public-dash.component.html',
  styleUrl: './public-dash.component.css'
})
export class PublicDashComponent {

}
