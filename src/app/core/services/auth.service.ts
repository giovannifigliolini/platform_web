import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'http://localhost:3000/api'

  constructor(private http : HttpClient) { }


  signup(email : string, password : string){

    return this.http.post<User>(this.baseURL + '/authorization/signup',{email : email , password : password});

  }

  login(email : string, password : string){

    return this.http.post<Token>(this.baseURL + '/authorization/login',{email : email , password : password});

  }

  
}
