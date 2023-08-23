import { LogoutdailogComponent } from './../logoutdailog/logoutdailog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(public dailog : MatDialog){}
   
  openDailog(){
    this.dailog.open(LogoutdailogComponent);
  }

}
