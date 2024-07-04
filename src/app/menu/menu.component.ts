import { Component } from '@angular/core';
import { MaterialModule } from '../angular-amaterial/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router) { }

  irLocation(): void {
    this.router.navigate(['/dashboard/location']);
  }

  irTodos(): void {
    this.router.navigate(['/dashboard/todos']);
  }
}