import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-professionals-category',
  templateUrl: './professionals-category.component.html',
  styleUrls: ['./professionals-category.component.scss']
})
export class ProfessionalsCategoryComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  count = 8;
  onSelectProfessional(professional: string) {
    this.router.navigate([professional], { relativeTo: this.activatedRoute })
  }
}
