import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string = '';
  password:string = '';

  disableIpt:boolean = false;

  authService = inject(AuthService);

  constructor(){}

  async login(form:NgForm){
    this.disableIpt = true;
    try {
      let resp = await this.authService.loginWithUsernameAndPassword(this.username,this.password);
      console.log(resp)
      // ToDo Redirect
    } catch (error) {
      console.log(error);
    }
    this.disableIpt = false;
    form.reset();
  }   
}
