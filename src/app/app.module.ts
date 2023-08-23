import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



// Components
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutdailogComponent } from './logoutdailog/logoutdailog.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EnrollComponent } from './enroll/enroll.component';
import { MarkattendenceComponent } from './markattendence/markattendence.component';
import { MarkeddailogComponent } from './markeddailog/markeddailog.component';
import { EnrolldailogComponent } from './enrolldailog/enrolldailog.component';
import { EnrollnewComponent } from './enrollnew/enrollnew.component';
import { EnrollnewdailogComponent } from './enrollnewdailog/enrollnewdailog.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserComponent,
    FooterComponent,
    LogoutdailogComponent,
    ErrorComponent,
    HomepageComponent,
    EnrollComponent,
    MarkattendenceComponent,
    MarkeddailogComponent,
    EnrolldailogComponent,
    EnrollnewComponent,
    EnrollnewdailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatExpansionModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
