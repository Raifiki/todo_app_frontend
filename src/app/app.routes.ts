import { Routes } from '@angular/router';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '',  redirectTo: 'login', pathMatch: 'full'},
    { path: 'todos', component: AllTodosComponent },
    { path: 'login', component: LoginComponent },
];
