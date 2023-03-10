import { Component, Input } from '@angular/core';
import { AuthService } from '../../modules/authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Input() user!: string;
  constructor(private authService: AuthService) { }

}
