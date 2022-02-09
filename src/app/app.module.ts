import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule }  from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmpolyeeComponent } from './empolyee/empolyee.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    HeaderComponent,
    FooterComponent,
    EmpolyeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
