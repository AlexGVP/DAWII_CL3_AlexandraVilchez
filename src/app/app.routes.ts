import { Routes } from '@angular/router';
import { LocationComponent } from './dashboard/location/location.component';
import { TodosComponent } from './dashboard/todos/todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent,
        children: [
    { path: 'location', component: LocationComponent },
    { path: 'todos', component: TodosComponent },
        ]
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];