import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { combineLatest } from 'rxjs';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const routes: Routes = [
    {path:'',component:AuthLayoutComponent,children:[
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent}
    ]},
    {path:'',component:BlankLayoutComponent,children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'cart',component:CartComponent},
        {path:'brands',component:BrandsComponent},
        {path:'categories',component:CategoriesComponent},
    ]},
    {path:'**',component:NotfoundComponent}
];
