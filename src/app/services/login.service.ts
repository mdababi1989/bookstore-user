import { Injectable } from '@angular/core';
import {AppConst} from '../constants/app-const';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class LoginService {
  private serverPath:string = AppConst.serverPath;

  constructor(private http:HttpClient) { }

  sendCredential(username: string, password: string) {
  	let url = this.serverPath+'/token';
  	let encodedCredentials = btoa(username+":"+password);
  	let basicHeader = "Basic "+encodedCredentials;
  	let reqHeaders = new HttpHeaders()
      .set('Content-Type' , 'application/x-www-form-urlencoded')
      .set('Authorization' , basicHeader);
  	return this.http.get(url, {headers: reqHeaders});
  }

  checkSession() {
  	let url = this.serverPath+'/checkSession';
    let reqHeaders = new HttpHeaders();
    reqHeaders = reqHeaders.set('x-auth-token',JSON.stringify(localStorage.getItem('xAuthToken')));
  	return this.http.get(url, {headers: reqHeaders});
  }

  logout() {
  	let url = this.serverPath+'/user/logout';
    let reqHeaders = new HttpHeaders()
      .set('x-auth-token' , localStorage.getItem('xAuthToken'));

  	return this.http.post(url, '', {headers: reqHeaders});
  }

}
