import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImgComponent } from './img/img.component';



@NgModule({
  declarations: [

    ImgComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ImgComponent
,
  ]
})
export class ComponentsModule { }
