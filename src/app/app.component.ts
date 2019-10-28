import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  list = ['Bruno, Carla', 'Eduardo'];
  
  exists = false;

  cliquei() {
    console.log('buuuu');
   // alert('cliquei');
    this.exists = (this.exists) ? false : true; 
    this.list.push('Bruno');
  }

}
