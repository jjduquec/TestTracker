import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
@Output() componentSelected:EventEmitter<string>;

constructor(){

  this.componentSelected=new EventEmitter();

  
}


ComponentSelected(selected:number){ 
  //specify wich component should be displayed 
  switch(selected)  {
    case 1 :  
              this.componentSelected.emit('sim');
              break;




  }


}



}
