import { Component, OnInit } from '@angular/core';
import { department } from './department';
import { OmsService } from '../Utility/oms.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html'
})
export class DepartmentComponent implements OnInit {

  search: string = "";

  key: string = "dName";

  reverse: boolean = true; //ASC

  p: number=0;

  role: string = "A";

  contacts: string[] = ["9878765454", "987654321", "9878654534", "98787654345", "987654321", "98787654345"];

  dept = { "did": 3, "dName": "HR", "description": "Human Resource" };

  depts:department[]=[] ;

  constructor(private omsservice:OmsService) { }

  ngOnInit(): void {
    this.omsservice.getDepartments().subscribe((res) => {
      console.log(res);
      this.depts = res;
    });
  }

  sort(key:string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
