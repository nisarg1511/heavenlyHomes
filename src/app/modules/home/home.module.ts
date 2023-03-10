import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pages from './pages'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as components from './components'

const routes: Routes = [
    {
        path: '',
        component: pages.ModulePageComponent,
        children: [
            {
                path: '',
                component: pages.HomePageComponent
            }
        ]
    }
]

@NgModule({
    declarations: [
        pages.HomePageComponent,
        pages.ModulePageComponent,
        components.CarouselComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ]
})
export class HomeModule { }