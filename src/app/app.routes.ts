import { Routes } from '@angular/router';
import { LocationComponent } from './dashboard/location/location.component';
import { TodosComponent } from './dashboard/todos/todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { 
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'location', component: LocationComponent },
      { path: 'todos', component: TodosComponent }
    ]
  },
  { path: '**', redirectTo: '/menu' }
];