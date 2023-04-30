import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [ImgComponent, CardComponent],
  imports: [ CommonModule],
  exports: [ImgComponent, CardComponent],
})
export class ComponentsModule {}
