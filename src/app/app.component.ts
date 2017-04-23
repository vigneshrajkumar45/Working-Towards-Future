import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  states = [{code:1,name:'Coimbatore'},{code:2,name:'Chennai'},{code:2,name:'Trichy'}]
}
