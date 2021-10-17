import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.UserUrl;
  private tokens = environment.gitToken;

  userName : string = '';
  private clientId = 'a5d7d41a6988eba99dc3';
  private clientSecret = 'd929fcdc2655da67ead12f36d73247a7d9dd3fcf';

  constructor ( private httpClient : HttpClient) {
    console.log ('app is running');
  }
  getUserInfo () {
    return this.httpClient.get<any[]>(`${this.baseUrl}${this.userName}?client_id= + ${this.clientId} + &client_secret= + ${this.clientSecret}`).toPromise()
  }
  updateProfile(userName:string){
    this.userName =userName;
  }
  
}
