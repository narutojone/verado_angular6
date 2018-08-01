import { NgModule } from '@angular/core';

import { VeradoSharedModule } from '@verado/shared.module';

import { NavbarComponent } from './navbar.component';
import { NavbarVerticalStyle1Module } from './vertical/style-1/style-1.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        VeradoSharedModule,
        NavbarVerticalStyle1Module,
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
