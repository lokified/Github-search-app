import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user-name/user/user.component';
import { RepoComponent } from './repositories/repo/repo.component';

const routes: Routes = [
  { path : 'user', component : UserComponent},
  { path : 'repos', component : RepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
