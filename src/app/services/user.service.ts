import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.UserUrl;
  private token = environment.gitToken;
  
  

  showUsers ( ) : any {
    return User;
  }

  constructor( private http : HttpClient) {;
   }
  getUsers ( input :string) {
    return this.http.get<any[]>(`${this.baseUrl}${input}/repos`,{ }).toPromise();
  }
}
