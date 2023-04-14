import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../authentication/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messageForm = new FormGroup({
    newMessage: new FormControl('', Validators.required)
  })
  reciverId: string;
  messageList: any[] = [];
  senderId: string;
  constructor(private chatService: ChatService,
    private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {

    this.chatService.getNewMessage().subscribe((message: any) => {
      if (message.senderId === this.chatService.sender || message.reciverId === this.chatService.sender) {
        this.messageList.push(message);
      }
    });
    this.senderId = this.chatService.sender;
    this.reciverId = this.route.snapshot.params['professional_id'];
  }

  sendMessage() {
    this.chatService.sendMessage(this.messageForm.value.newMessage, this.reciverId, this.senderId, this.chatService.name);
    this.messageForm.reset();
  }
}
