import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from './share/service/authentication.service';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  links: any;
  sidebarMode: string;

  constructor(
    @Inject(AuthenticationService) private auth: AuthenticationService,
    private media: ObservableMedia
  ) { }

  ngOnInit() {
    this.links = [
      { id: 1, name: 'Don', href: '/don', icon: 'pencil' }
    ];
    this.checkForMediaQuery();
  }

  logout() {
    this.auth.logOut();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }
  
  checkForMediaQuery() {
    if(this.media.isActive('xs')) {
      this.sidebarMode = 'over';
    }
    else if(this.media.isActive('sm')) {
      this.sidebarMode = 'over';
    }
    else if(this.media.isActive('gt-md')) {
      this.sidebarMode = 'over';
    }
  }
}
