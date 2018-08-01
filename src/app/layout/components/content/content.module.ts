import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VeradoSharedModule } from '@verado/shared.module';

import { ContentComponent } from './content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        VeradoSharedModule,
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule
{
}
