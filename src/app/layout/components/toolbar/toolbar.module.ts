import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { VeradoSearchBarModule } from '@verado/components';
import { VeradoSharedModule } from '@verado/shared.module';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        VeradoSharedModule,
        VeradoSearchBarModule,
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
