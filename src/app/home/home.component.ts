import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(public cookies: CookieService, public sessionStorage: SessionStorageService, public localStorage: LocalStorageService) { }

  ngOnInit(): void {
    // if(this.cookies.check('cVal'))
    // {
    //   this.cVal=this.cookies.get('cVal');
    // }
    // if(this.sessionStorage.get('sVal')!=null)
    // {
    //   this.sVal=this.cookies.get('sVal');
    // }
    if(this.localStorage.get('obj')!=null)
    {
      this.lVal=this.cookies.get('obj');
    }
  }
  // cVal:string="";
  // sVal:string="";
  lVal:string="";
}
