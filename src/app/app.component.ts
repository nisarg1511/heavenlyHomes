import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/authentication/services/auth.service';
import { ChatService } from './modules/professionals/service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'heavenlyHomes1';
  user!: string;
  constructor(private authService: AuthService, private chatService: ChatService) { }
  ngOnInit() {
    this.authService.userName.subscribe((x: any) => {
      this.user = x.displayName;
      this.chatService.sender = x.uid;
      this.chatService.name = x.displayName;
    });
  }
}
