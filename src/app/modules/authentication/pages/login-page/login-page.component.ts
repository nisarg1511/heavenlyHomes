import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss', '../../auth-form-style.scss'],
  host: {
    class: 'col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 '
  }
})
export class LoginPageComponent implements OnInit {

  showPassword = false;
  showCredentialsError = false;

  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.loginService.signIn(
      form.value.email,
      form.value.password
    ).then((credentials: any) => {
      let user;
      user = credentials.user?.displayName;
      this.router.navigate(['/home']);
    }).catch(
      (err) => {
        console.log(err);
        this.showCredentialsError = true;
      }
    )
  }

  // continueWithGoogle() {
  //   this.loginService.continueWithGoogle().then((credentials: any) => {
  //     let user = credentials.user?.displayName;
  //     this.loginService.userName.next(user);
  //     this.router.navigate(['/home']);
  //   }).catch((e) => {
  //     console.log(e);
  //   });
  // }

}
