import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  currentUser;
  constructor( private router: Router,
        private authService: AuthService
    ) {
        this.authService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
