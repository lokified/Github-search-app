import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos: any;
  
  constructor( private userService : UserService) { }

  showRepos (){
    this.userService.getUserRepos().then(repos =>{
      this.repos= repos; 
 
     })
  }

  ngOnInit(): void {
  }

}
