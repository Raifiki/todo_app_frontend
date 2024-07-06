import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../../environment/einvironment';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent {
  todos:any = [];

  constructor(private http: HttpClient){}

  async ngOnInit(){
    this.todos = await this.loadTodos();
    console.log(this.todos);
  }

  loadTodos(){
    let url = environment.baseUrl + "/todos/";
    return lastValueFrom(this.http.get(url));
  }
}
