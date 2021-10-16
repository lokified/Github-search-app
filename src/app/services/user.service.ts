import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  showUsers ( ) : any {
    return User;
  }

  constructor( private http : HttpClient) { }
  getUsers () {
    return this.http.get<any[]>(`https://api.github.com/users/lokified/repos`,{ }).toPromise();
  }
}
