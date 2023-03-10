import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  constructor(private authservice: AuthService, private router: Router) { }
  onSubmit(form: NgForm) {
    this.authservice.signUp(form.value.email, form.value.password, form.value.userName).then(
      (credentials) => {
        const user = credentials.user;
        user?.updateProfile({
          displayName: form.value.userName
        })
        this.router.navigate(['/auth/login']);
      }
    );
  }

}
