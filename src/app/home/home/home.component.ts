import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user-class/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile : any = User;
  repos : any = User;

  constructor(private user : UserService) { }

  findProfile() {
    this.user.updateProfile('lokified');
 
    this.user.getUserInfo().then( profile =>{
      console.log(profile)
    this.profile = profile; 
   });

   this.user.getUserRepos().then(repo =>{
    this.repos= repo; 

   })

    
}
ngOnInit(): void {
  this.findProfile();
}

}
