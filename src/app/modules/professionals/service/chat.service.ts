import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { io } from 'socket.io-client'
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  socket = io('http://localhost:3000');
  sender: string;
  name: string;
  public sendMessage(message: any, reciverId: string, senderId: string, name: string) {
    console.log(message);
    this.socket.emit('sendMessage', { message, reciverId, senderId, name });
  }

  public getNewMessage = () => {
    this.socket.on('sendMessage', (message) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };
}
