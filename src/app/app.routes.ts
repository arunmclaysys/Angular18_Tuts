import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/guard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',  //previoulsy we can pass only route name, now we can pass function too from angular 18.
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'master',
                component:MasterComponent,
                canActivate:[authGuard]
            },
            {
                path:'employee',
                component:EmployeeComponent
            },
            {
                path:'client',
                component:ClientComponent,
                canActivate:[authGuard]
            },
            {
                path:'client-project',
                component:ClientProjectComponent
            }
        ]
    }
];
