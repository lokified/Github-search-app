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
  

  constructor ( private httpClient : HttpClient) {
    console.log ('app is running');
  }
  getUserInfo () {
    return this.httpClient.get<any[]>(`${this.baseUrl}${this.userName}??access_token=+${this.tokens}`).toPromise();
  }
  updateProfile(userName:string){
    this.userName =userName;
  }

  getUserRepos () {
    return this.httpClient.get<any[]>(`${this.baseUrl}${this.userName}/repos??access_token=+${this.tokens}`).toPromise();
  }
  updateRepos(repos : string) {
    return this.userName = repos;
  }
}
