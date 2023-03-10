import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/authentication/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'heavenlyHomes1';
  user!: string;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.userName.subscribe(x => {
      this.user = x;
    });
  }
}
