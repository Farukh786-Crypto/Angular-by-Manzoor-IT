import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { department } from '../department/department';
import { employee } from '../empolyee/employee';

@Injectable({
  providedIn: 'root'
})
export class OmsService {

  baseUrl:string="https://localhost:44336/api";

  constructor(private http:HttpClient)
  {

  }

  // department
  getDepartments(){
    return this.http.get<department[]>(this.baseUrl+"/Department");
  }

  //employee
  getEmployees() {
    return this.http.get<employee[]>(this.baseUrl + "/Employees");
  }

  getEmployeesById(id:number) {
    return this.http.get<employee>(this.baseUrl + "/Employees/"+id);
  }

  getEmployeesByDid(did: number) {
    return this.http.get<employee>(this.baseUrl + "/Employees/GetEmployee/" + did);
  }
  putEmployee(eid:number,emp:employee) {
    return this.http.put<employee>(this.baseUrl + "/Employees/"+eid,emp);
  }

  postEmployee(emp: employee) {
    return this.http.post<employee>(this.baseUrl + "/Employees", emp);
  }

  deleteEmployee(eid:number) {
    return this.http.delete<employee>(this.baseUrl + "/Employees/"+eid);
  }
}
