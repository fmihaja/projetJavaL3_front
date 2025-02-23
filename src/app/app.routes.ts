import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { IndexComponent } from '../components/home/index/index.component';
import { ClientComponent } from '../components/home/client/client.component';

export const routes: Routes = [
    { path:'',redirectTo:'login', pathMatch:'full'},
    { path:'login', component: LoginComponent},
    {   path:'home',
        component: HomeComponent,
        children:[
            {path:'', component: IndexComponent},
            {path:'client', component: ClientComponent}
        ]
    },


];
