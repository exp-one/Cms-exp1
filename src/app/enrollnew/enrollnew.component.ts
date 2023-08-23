import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EnrolldailogComponent } from '../enrolldailog/enrolldailog.component';


import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnrollnewdailogComponent } from '../enrollnewdailog/enrollnewdailog.component';


export interface UserData {
  id: string;
  name: string;
  attendence: string;
  course: string;
}

const COURSES: string[] = [
  'Angular',
  'React',
  'Type Script',
  'Figma',
  'Node JS',
  '.Net',
  'Mongo DB'


];
const NAMES: string[] = [

  'Ruthvik',
  'Tulasi Ram',
  'Dhruv',
  'Mayank',
  'Santhosh',
  'Ravi',
  'Deepak',
  'Hari'
];


@Component({
  selector: 'app-enrollnew',
  templateUrl: './enrollnew.component.html',
  styleUrls: ['./enrollnew.component.scss']
})
export class EnrollnewComponent implements AfterViewInit {
  panelOpenState = false;

  displayedColumns: string[] = ['id', 'name', 'attendence', 'course'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dailog: MatDialog) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDailog() {
    this.dailog.open(EnrollnewdailogComponent);
  }




}


function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    attendence: Math.round(Math.random() * 100).toString(),
    course: COURSES[Math.round(Math.random() * (COURSES.length - 1))],
  };
}
