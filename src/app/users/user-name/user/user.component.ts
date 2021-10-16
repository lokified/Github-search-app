import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-class/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : any [] = [];
  nameInput :string = '';
  repoNumber! : number;
  isLoading = true;

  constructor(private userService : UserService) {

   }

  ngOnInit(): void {

  }

  getPublicRepositories () {
    this.userService.getUsers().then( (response: any[]) => {
      this.users = response;
    })
  }

}
