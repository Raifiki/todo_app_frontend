import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    try {
      this.todos = await this.loadTodos();
      console.log(this.todos);
    } catch (error) {
      console.log(error);
      
    }
  }

  loadTodos(){
    let url = environment.baseUrl + "/todos/";
    //let header = new HttpHeaders();
    //header = header.set('Authorization','Token ' + localStorage.getItem('token'))
    return lastValueFrom(this.http.get(url));
  }
}
