import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { VeradoProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        VeradoProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports     : [
        VeradoProgressBarComponent
    ]
})
export class VeradoProgressBarModule
{
}
