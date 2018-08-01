import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { VeradoSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        VeradoSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        VeradoSearchBarComponent
    ]
})
export class VeradoSearchBarModule
{
}
