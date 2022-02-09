import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from './employee';
import { department } from '../department/department';

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css']
})
export class EmpolyeeComponent implements OnInit {
  did: number = 0;
  search: string = "";
  emps: employee[] = [];
  depts: department[] = [];
  key: string = "";
  reverse: boolean = false;
  p: number = 0;
  empsFiltered: employee[] = [];

  showSuccessMsg: boolean = false;
  showFailureMsg: boolean = false;
  sucessMsg: string = "";
  serverErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployees();
  }


  getEmployeesByDid() {
    if (this.did != 0) {
      this.empsFiltered = this.emps.filter(x => x.did == this.did);
    }
    else {
      this.empsFiltered = this.emps;
    }
  }

  // getEmployeesByDid() {
  //  if (this.did != 0) {
  //    this.http.get<any>("http://localhost:61964/api/Employees/GetEmployeeByDid/"+this.did).subscribe(res => {
  //      console.log(res);
  //      this.emps = res;
  //    });
  //  }
  //  else {
  //    this.http.get<any>("http://localhost:61964/api/Employees").subscribe(res => {
  //      console.log(res);
  //      this.emps = res;
  //    });
  //  }
  // }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  emp: employee = new employee();
  postEmployee() {
    console.log("Called Successfully!");
    console.log(this.emp);
    //this.emp.did = parseInt(this.emp.did.toString());
    this.http.post<employee>("https://localhost:44336/api/Employees", this.emp).subscribe(res => {
      console.log(res);
      //this.emp = new employee();
      this.getEmployees();
      this.showSuccessMsg = true;
      this.showFailureMsg = false;
      this.sucessMsg = "Record Inserted Successfully!!"
    }, err => {
      this.serverErrors = [];
      if (err.status === 400) {
        Object.keys(err.error.errors).forEach(key => {
          this.serverErrors.push(err.error.errors[key][0]);
        });
      }
      else if (err.status === 500) {
        this.serverErrors.push(err.error);
      }
      else if (err.status === 0) {
        this.serverErrors.push("Connection to api failed! May be web api server is down");
      }
      else if (err.status === 0) {
        this.serverErrors.push("Connection to api failed! May be web api server is down");
      }
      this.showFailureMsg = true;
      this.showSuccessMsg = false;
    });
  }

  getEmployees() {
    this.http.get<employee[]>("https://localhost:44336/api/Employees").subscribe(res => {
      console.log(res);
      this.emps = res;
      this.empsFiltered = this.emps;
    });
  }

  getDepartments() {
    this.http.get<department[]>("https://localhost:44336/api/Department").subscribe(res => {
      console.log(res);
      this.depts = res;
    });
  }

  editEmployee(emp:employee) {
    this.emp = emp;
    console.log(emp);
    console.log("Department name",emp.department.dName);
  }
  putEmployee() {
    console.log("Called Update Successfully!");
    console.log(this.emp);
    //this.emp.did = parseInt(this.emp.did.toString());
    this.http.put<employee>("https://localhost:44336/api/Employees/" + this.emp.eid, this.emp).subscribe(res => {
      console.log(res);
      //this.emp = new employee();
      this.getEmployees();
      this.showSuccessMsg = true;
      this.showFailureMsg = false;
      this.sucessMsg = "Record Updated Successfully!!"
    },
      err => {
        this.serverErrors = [];
        if (err.status === 400) {
          Object.keys(err.error.errors).forEach(key => {
            this.serverErrors.push(err.error.errors[key][0]);
          });
        }
        else if (err.status === 500) {
          this.serverErrors.push(err.error);
        }
        else if (err.status === 0) {
          this.serverErrors.push("Connection to api failed! May be web api server is down");
        }
        this.showFailureMsg = true;
        this.showSuccessMsg = false;
      }
    );
  }
  deleteEmployee(emp:employee) {
    if (confirm('Are you sure you want to delete Mr.' + emp.firstName)) {
      console.log(this.emp);
      //this.emp.did = parseInt(this.emp.did.toString());
      this.http.delete<employee>("https://localhost:44336/api/Employees/" + emp.eid).subscribe(res => {
        console.log(res);
        this.getEmployees();
        this.showSuccessMsg = true;
        this.showFailureMsg = false;
        this.sucessMsg = "Record Deleted Successfully!!"
      },
        err => {
          this.serverErrors = [];
          if (err.status === 400) {
            Object.keys(err.error.errors).forEach(key => {
              this.serverErrors.push(err.error.errors[key][0]);
            });
          }
          else if (err.status === 500) {
            this.serverErrors.push(err.error);
          }
          else if (err.status === 0) {
            this.serverErrors.push("Connection to api failed! May be web api server is down");
          }
          this.showFailureMsg = true;
          this.showSuccessMsg = false;
        }
      );
    }
  }
}

