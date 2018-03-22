import { Injectable } from '@angular/core';
import { Usermaster } from './models/usermaster';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(public http:HttpClient) { }

  login(data:Usermaster):Observable<Usermaster>{
    console.log(data)
    return this.http
    .post<Usermaster>('url',data)
  }
}
