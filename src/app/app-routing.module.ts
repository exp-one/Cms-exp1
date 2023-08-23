import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MarkattendenceComponent } from './markattendence/markattendence.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EnrollnewComponent } from './enrollnew/enrollnew.component';

const routes: Routes = [
  {path:'', component: AuthComponent},
  {path:'auth', component: AuthComponent},
  {path:'user', component: UserComponent,children: [
    { path: 'home', component: HomepageComponent },
    { path: 'mark', component: MarkattendenceComponent },
    { path: 'enroll', component: EnrollComponent },
    { path:'enrollnew', component: EnrollnewComponent }
    
  ]
},


  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ AuthComponent,ErrorComponent, UserComponent, FooterComponent, HomepageComponent, MarkattendenceComponent, EnrollComponent, ]
