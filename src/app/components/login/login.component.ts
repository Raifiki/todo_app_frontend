import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private router:Router){}

  async login(form:NgForm){
    this.disableIpt = true;
    try {
      let resp = await this.authService.loginWithUsernameAndPassword(this.username,this.password);
      console.log(resp)
      this.router.navigateByUrl('/todos')
    } catch (error) {
      console.log(error);
    }
    this.disableIpt = false;
    form.reset();
  }   
}
