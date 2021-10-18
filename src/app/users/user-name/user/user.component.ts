import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-class/user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  profile: any = User;
  userName: any = 'lokified';
 

  constructor(private userService : UserService) {

   }

    findProfile() {
     this.userService.updateProfile(this.userName);
  
     this.userService.getUserInfo().then( profile =>{
       console.log(profile)
     this.profile = profile; 
    });

 

  }
  ngOnInit(): void {
    this.findProfile();
   }
}
