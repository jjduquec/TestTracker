import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-tracker';



  OnComponentSelected($event:string){

    alert("se ha seleccionado el componente:"+$event);




  }










}
