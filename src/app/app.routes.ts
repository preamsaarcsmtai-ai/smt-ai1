import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Admin } from './pages/admin/admin';
import { Auth } from './services/auth';
import { roleGuard } from './guards/role-guard';
import { authGuard } from './guards/auth-guard';
import { Users } from './pages/users/users';

export const routes: Routes = [
    {path:'', redirectTo:'', pathMatch:'full'},
    {path:'login', component:Login},
    {path:'register', component: Register},
    {path:'dashboard', component:Dashboard},
    {path:'admin', component: Admin, canActivate:[authGuard, roleGuard], data:{role:'admin'}},
    {path:'users', component:Users, canActivate:[authGuard, roleGuard], data:{role:'user'}}
];
