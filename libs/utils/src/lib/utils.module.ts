import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { ActionOutsideDirective } from './directives/action-outside.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PressEnterDirective } from './directives/press-enter.directive';
import { ErrorImageDirective } from './directives/error-image.directive';
import { NothingComponent } from './components/nothing/nothing.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule,
    RouterModule
  
  ],
  declarations: [
    DropdownComponent,
    SpinnerComponent,
    ErrorMsgDirective,
    ErrorImageDirective,
    ActionOutsideDirective,
    PressEnterDirective,
    NothingComponent,
    SubNavComponent,

  ],
  exports: [
    PressEnterDirective,
    DropdownComponent,
    SpinnerComponent,
    ErrorImageDirective,
    ErrorMsgDirective,
    ActionOutsideDirective,
    NothingComponent,
    SubNavComponent,
  ],
  
})
export class UtilsModule {}
