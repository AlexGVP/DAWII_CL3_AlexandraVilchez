import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  private apiUrl = "https://jsonplaceholder.typicode.com/todos/"  
  constructor(private http: HttpClient) { }

  getTodos(): Observable<any>{
    let url = `${this.apiUrl}?completed=true`
    return this.http.get<any[]>(url)
  }
}