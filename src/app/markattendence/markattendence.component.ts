import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MarkeddailogComponent } from '../markeddailog/markeddailog.component';


@Component({
  selector: 'app-markattendence',
  templateUrl: './markattendence.component.html',
  styleUrls: ['./markattendence.component.scss']
})
export class MarkattendenceComponent {

  date = new Date((new Date().getTime() - 3888000000));
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  openDailog(){
    this.dailog.open(MarkeddailogComponent);
  }

  markForm = this.formBuilder.group({

  });
  onSubmit(): void {
    console.log(this.markForm.value);
    this.openDailog()
  }

  Students: string[] = ['Lewis Hamilton', 'George Russel', 'Charles Leclerc', 'Lando Norris', 'Sebastian Vettel'];


  markattendenceForm = this.formBuilder.group({
    
  })
  //(click)="openDailog()"
  constructor(private formBuilder: FormBuilder, public dailog : MatDialog) {}


}
