import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenicationService } from './services/authenication.service';
import { RegistrationService } from './services/registration.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HeaderTemplateComponent } from './home/header-template/header-template.component';
import { SearchComponent } from './home/search/search.component';

import { AuthGuard } from './guards/auth.guard';

//import { NgbdTypeaheadBasic } from './typeahead-basic';

const appRoutes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register', component: RegisterComponent },
  { path:'home',component: HomeComponent,canActivate:[ AuthGuard ] , children: [{
      path:'search', component: SearchComponent, canActivate: [ AuthGuard ]
  }] }
  ];

const homeRoutes: Routes = [
  { path:'search', component: SearchComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports:      [  BrowserModule, FormsModule, HttpClientModule, HttpModule, RouterModule.forRoot(appRoutes,{enableTracing:true}), RouterModule.forChild(homeRoutes) ],
  declarations: [ AppComponent, HelloComponent, RegisterComponent, LoginComponent, HomeComponent, HeaderTemplateComponent, SearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthenicationService, RegistrationService, AuthGuard ]
})

export class AppModule { }
