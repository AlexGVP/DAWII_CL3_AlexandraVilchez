import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-amaterial/material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router,
    private route: ActivatedRoute,
  ){
    }
    irMenu(): void{
      this.router.navigate([""], {relativeTo: this.route});
    }
    irLocation(): void{
      this.router.navigate(["location"], {relativeTo: this.route});
    }
    irTodos(): void{
      this.router.navigate(["todos"], {relativeTo: this.route});
    }
  }