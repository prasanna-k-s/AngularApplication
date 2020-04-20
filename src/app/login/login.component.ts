import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from "@angular/router";
import { AuthenicationService } from '../services/authenication.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  name = 'Angular Application';

  constructor(private router: Router, private authenticationService: AuthenicationService) { }
  /**
   * SignUp function.
   */
  signUp() {
    console.log('Signup');
    this.router.navigateByUrl('/register');
  }
  /**
   * Login submit function.
   */
  login() {
    this.authenticationService.login(this.model.username, this.model.password).subscribe(response => { this.handleSuccess(response, this.model.username); this.router.navigateByUrl('/home'); },
      error => { this.handleError(error); });;

  }
  /**
   * Handle the error scenario.
   */
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(JSON.stringify(error) || 'Server error');
  }
  /**
   * Validates the username from the response.
   */
  private authenicate(response: Object, username: string): boolean {
    let list: Object[] = [{
      first_name:''
    }];
    _.set(list,'first_name','');
    list = JSON.parse(JSON.stringify(response)).data;
    //console.log(list); 

    for (let element of list) {
      //console.log(element.first_name);
      //if (element.first_name == username) {
        console.log('Valid user');
        localStorage.setItem('currentUser',username);
        return true;
      //}
    }
    return false;
  }

  /**
   * success handler.
   */
  private handleSuccess(response: Object, username: string): boolean {
    return this.authenicate(response, username);
  }

  ngOnInit() {
    console.log('nG onInit ');
  }

}