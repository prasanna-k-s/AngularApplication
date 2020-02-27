import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regService:RegistrationService) { }

  ngOnInit() {
  }

  name = 'Registration';

  signup() {
    this.regService.signup();
  }

}