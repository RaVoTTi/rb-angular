// ANGULAR
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityDataModule,
  EntityMetadataMap,
  DefaultDataServiceConfig,
} from '@ngrx/data';

// ME
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainComponent } from './shared/main/main.component';

import { AuthBaseModule, JwtInterceptor } from 'libs/auth-base/src';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthNavbarComponent } from './shared/auth-navbar/auth-navbar.component';
import { HttpErrorInterceptor, HttpHeaderInterceptor, UtilsModule } from 'libs/utils/src';
import * as fromRoot from './reducers';
import { environment } from 'environments/environment';
import { ComponentStore } from '@ngrx/component-store';
import { ComponentsModule } from 'libs/components/src';

const entityMetadata: EntityMetadataMap = {
  Book: {},
};
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.API_URL,
}

// export const entityConfig = {
//   entityMetadata,
// };

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    AuthNavbarComponent,
    MainComponent,
  ],
  imports: [
    UtilsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthBaseModule.forRoot(),
    StoreModule.forRoot(fromRoot.reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    EffectsModule.forRoot([]),
    
    // EntityDataModule.forRoot({}),
  ],
  providers: [
    // {provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig},
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
