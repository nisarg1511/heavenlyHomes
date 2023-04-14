import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pages from './pages';
import { RouterModule, Routes } from '@angular/router';
import * as components from './components'
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalResolver } from './resolvers/professional.resolver';
import { ChatComponent } from './pages/chat/chat.component';
const routes: Routes = [
  {
    path: '',
    component: pages.ModulePageComponent,
    children: [
      {
        path: 'new',
        component: pages.ProfessionalRegistrationComponent
      },
      {
        path: 'category',
        component: pages.ProfessionalsCategoryComponent
      },
      {
        path: 'category/:profession',
        component: pages.ProfessionalListComponent,
        resolve: { professionals: ProfessionalResolver },

      },
      {
        path: 'category/:profession/:professional_id',
        component: pages.ProfessionalProfileComponent,
        resolve: { professionals: ProfessionalResolver },
      },
      {
        path: 'category/:profession/:professional_id/chat',
        component: pages.ChatComponent
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
    pages.ProfessionalRegistrationComponent,
    components.ProfessionalSocialMediaComponent,
    components.ProfessionalProfilePictureComponent,
    components.ProfessionalContactDetailsComponent,
    components.ProfessionalProjectItemComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProfessionalsModule { }
