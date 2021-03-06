import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user-name/user/user.component';
import { RepoComponent } from './repositories/repo/repo.component';
import { NavComponent } from './nav-bar/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { ChangeBgDirective } from './change-bg.directive';
import { ToUpperCasePipe } from './to-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    NavComponent,
    HomeComponent,
    ChangeBgDirective,
    ToUpperCasePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
