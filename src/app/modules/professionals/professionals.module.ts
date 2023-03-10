import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pages from './pages';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalSocialMediaComponent } from './components/professional-social-media/professional-social-media.component';
import { ProfessionalProfilePictureComponent } from './components/professional-profile-picture/professional-profile-picture.component';
import { ProfessionalContactDetailsComponent } from './components/professional-contact-details/professional-contact-details.component';
import { ProfessionalProjectItemComponent } from './components/professional-project-item/professional-project-item.component';

const routes: Routes = [
  {
    path: '',
    component: pages.ModulePageComponent,
    children: [
      {
        path: 'category',
        component: pages.ProfessionalsCategoryComponent
      },
      {
        path: 'category/:profession',
        component: pages.ProfessionalListComponent
      },
      {
        path: 'category/:profession/:professional_id',
        component: pages.ProfessionalProfileComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    pages.ProfessionalListComponent,
    pages.ModulePageComponent,
    pages.ProfessionalsCategoryComponent,
    pages.ProfessionalProfileComponent,
    ProfessionalSocialMediaComponent,
    ProfessionalProfilePictureComponent,
    ProfessionalContactDetailsComponent,
    ProfessionalProjectItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfessionalsModule { }
