import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../common/user.service';
import { IUser } from '../../../../models/user/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss', '../../auth-form-style.scss'],
  host: {
    class: 'col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6'
  }
})
export class SignupPageComponent {
  constructor(private authservice: AuthService, private router: Router, private userService: UserService) { }
  onSubmit(form: NgForm) {

    this.authservice.signUp(form.value.email, form.value.password, form.value.userName).then(
      (credentials) => {
        credentials.user?.updateProfile({ displayName: form.value.userName }).then(
          (x) => {
            const user: IUser = {
              user_id: credentials.user.uid,
              user_name: credentials.user.displayName,
              email: credentials.user.email
            };
            if (form.value.user_role === 'professional') {
              this.router.navigate(['/professionals/new']);
            }
            else {
              this.router.navigate(['/home']);
            }
            this.userService.createUser(user);
          });
      });
  }

}
