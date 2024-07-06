import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment/einvironment';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)

  constructor() { }

  public loginWithUsernameAndPassword(username:string, password:string){
    let url = environment.baseUrl + "/login/";
    let body = {
      "username": username,
      "password": password
    };
    return lastValueFrom(this.http.post(url,body));
  }
}
