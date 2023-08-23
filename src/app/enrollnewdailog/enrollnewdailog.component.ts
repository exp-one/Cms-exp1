import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EnrolldailogComponent } from '../enrolldailog/enrolldailog.component';



@Component({
  selector: 'app-enrollnewdailog',
  templateUrl: './enrollnewdailog.component.html',
  styleUrls: ['./enrollnewdailog.component.scss']
})
export class EnrollnewdailogComponent {

  constructor(private formBuilder: FormBuilder, public dailog: MatDialog){
    
  }
  nameField = new FormControl('', [Validators.required]);
  rollnoField = new FormControl('', [Validators.required]);
  courseField = new FormControl('', [Validators.required]);
  batchField = new FormControl('', [Validators.required]);

  enrollForm = this.formBuilder.group({
    name: this.nameField,
    rollno: this.rollnoField,
    course: this.courseField,
    batch: this.batchField,
  });


  onSubmit(): void {
    console.log(this.enrollForm.value);
    this.openDailog()
  }

  openDailog() {
    this.dailog.open(EnrolldailogComponent);
  }
}
