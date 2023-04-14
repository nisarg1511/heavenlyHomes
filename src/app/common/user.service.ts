import { Injectable } from '@angular/core';
import { IProfessional, IUser } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser;
  professional: IProfessional;
  constructor() { }
  createUser(user_details: IUser) {
    console.log(user_details);
  }
}
