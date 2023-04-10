import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: TermsComponent,
    
  },
];

@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    TermsComponent
  ]
})
export class TermsModule { }
