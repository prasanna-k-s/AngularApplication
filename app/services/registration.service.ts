import { Injectable } from '@angular/core';


@Injectable()
export class RegistrationService {

  constructor() { }
  /**
   * Signup service
   */
  signup() {
    console.log('Registration service');

    var jsonfile = require('jsonfile')

    var file = '/tmp/data.json'
    var obj = { name: 'JP' };

    jsonfile.writeFile(file, obj, function (err) {
      console.error(err)
    });

  }
}