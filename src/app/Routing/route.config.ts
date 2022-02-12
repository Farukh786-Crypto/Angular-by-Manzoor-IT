import { Routes } from '@angular/router'
import { DashboardComponent } from '../admin/dashboard/dashboard.component'
import { DepartmentComponent } from '../department/department.component'
import { EmpolyeeComponent } from '../empolyee/empolyee.component'
import { LoginComponent } from '../login/login.component'
import { NotfoundComponent } from '../notfound/notfound.component'
import { RegisterComponent } from '../register/register.component'


export const myroute:Routes=[
  {path:'home',component:DashboardComponent},
  {path:'department',component:DepartmentComponent},
  {path:'employee',component:EmpolyeeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
]







