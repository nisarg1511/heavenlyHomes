import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss']
})
export class ProfessionalListComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  onSelectProfessional(id: string) {
    this.router.navigate([id], { relativeTo: this.route })
  }
}
