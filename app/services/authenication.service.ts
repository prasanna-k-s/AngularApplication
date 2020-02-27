import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map, filter, scan, tap } from 'rxjs/operators';

@Injectable()
export class AuthenicationService {

  constructor(private http: HttpClient) { }

   login(username: string, password: string):Observable<Response> {
    // console.log(username,password);
    let list: string[] = [];
    let temp = "";
    
    return this.http.get<any>('https://reqres.in/api/users?page=2');

  }

}