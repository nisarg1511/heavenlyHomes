import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pages from './pages'
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: pages.ModulepageComponent,
    children: [
      {
        path: '',
        component: pages.CalculatorComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    pages.CalculatorComponent,
    pages.ModulepageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CalculatorModule { }
