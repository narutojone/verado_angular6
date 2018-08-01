import { NgModule } from '@angular/core';

import { VeradoSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        VeradoSidebarComponent
    ],
    exports     : [
        VeradoSidebarComponent
    ]
})
export class VeradoSidebarModule
{
}
