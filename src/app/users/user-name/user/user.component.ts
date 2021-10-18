import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-class/user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  profile: any;
  repos: any;
  userName: any = '';
 

  constructor(private userService : UserService) {

   }

    findProfile() {
     this.userService.updateProfile(this.userName);
  
     this.userService.getUserInfo().then( profile =>{
       console.log(profile)
     this.profile = profile; 
    });

    this.userService.getUserRepos().then(repos =>{
     this.repos= repos; 

    })

  }
  ngOnInit(): void {
    this.findProfile();
   }
}
