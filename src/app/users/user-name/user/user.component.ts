import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-class/user';
import { environment } from 'src/environments/environment';


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
    this.getPublicRepositories();
  }

  getPublicRepositories () {
    this.userService.getUsers(this.nameInput).then( (response: any[]) => {
      this.users = response;
      this.repoNumber =response.length;
    }).catch( (err)=> {
      console.log(err);
    })
  }

}
