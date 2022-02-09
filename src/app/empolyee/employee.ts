import { department } from "../department/department";

export class employee {
  eid: number=0;
  firstName: string="";
  lastName: string="";
  fullName: string="";
  gender: string="";
  salary: number=0;
  did: number=0;
  email: string="";
  confirmEmail: string="";
  createdBy: string="";
  fullname():any{
    return this.firstName+" "+this.lastName;
  }
  department!:department;
}
