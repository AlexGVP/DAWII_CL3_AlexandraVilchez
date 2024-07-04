import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos:any[] = [];

  private idInicio = 25
  private idFin = 90

  constructor(private todosService: TodosService){}
  ngOnInit():void{
    this.todosService.getTodos().subscribe(data=>{
      this.todos = data.filter((x: any) => x.id >= this.idInicio && x.id <= this.idFin);
    })
  }
}