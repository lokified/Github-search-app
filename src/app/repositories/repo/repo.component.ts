import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Repo } from 'src/app/repo-class/repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos: any = Repo;
  userName: any = 'lokified';

  constructor( private userService : UserService) { }

  showRepos (){
    this.userService.updateRepos(this.userName);
  
    this.userService.getUserRepos().then(repo =>{
      this.repos= repo; 
 
     })
  }

  ngOnInit(): void {
    this.showRepos();
  }

}
