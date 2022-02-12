import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private cookies:CookieService,private sessionStorage:SessionStorageService,private localStorage:LocalStorageService) { }

  ngOnInit(): void {

  }

  user={ "uid":1, "userName":"Peter" , "role":"Admin" };

  login()
  {
    // logic..
    // this.cookies.set('cVal','MTT from cookies');
    // this.sessionStorage.set('sVal','MTT from session');
    this.localStorage.set('lVal','MTT from local');
    this.localStorage.set('obj',this.user);
    this.router.navigate(['/home']);
  }

}
