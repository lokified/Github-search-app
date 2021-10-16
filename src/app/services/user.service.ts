import { Injectable } from '@angular/core';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  showUsers () : any {
    return User;
  }

  constructor() { }
}
