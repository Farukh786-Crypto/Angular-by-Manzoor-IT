import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Manzoor The Trainer! Test";

  clickMe() {
    console.log("You have clicked me " + this.name);
  }

}
