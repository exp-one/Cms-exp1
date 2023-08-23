import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EnrolldailogComponent } from '../enrolldailog/enrolldailog.component';


@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent {

  panelOpenState = false;
  
  nameField = new FormControl('', [Validators.required]);
  rollnoField = new FormControl('', [Validators.required]);
  courseField = new FormControl('',[Validators.required]);
  batchField = new FormControl('',[Validators.required]);

  enrollForm = this.formBuilder.group({
    name : this.nameField,
    rollno: this.rollnoField,
    course: this.courseField,
    batch: this.batchField,
  });


  constructor(
    //private loginService : LoginService,
    private formBuilder: FormBuilder, public dailog : MatDialog
  ) {}

  openDailog(){
    this.dailog.open(EnrolldailogComponent);
  }
  onSubmit(): void {
    console.log(this.enrollForm.value);
    this.openDailog()
  }

}

