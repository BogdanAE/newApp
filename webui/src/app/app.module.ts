import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent}
] 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
