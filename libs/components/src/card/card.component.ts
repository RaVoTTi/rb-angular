import { IBook } from 'libs/utils/src';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() book! : IBook;



  constructor( ) { }


// addBookToWishlist(){
//   if( this.isFavorite === false){

//     this.isFavorite = true
//   }
//   else{

//     this.isFavorite = false
//   }
// }



}
