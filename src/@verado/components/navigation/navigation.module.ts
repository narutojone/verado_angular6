import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { VeradoNavigationComponent } from './navigation.component';
import { VeradoNavVerticalItemComponent } from './vertical/item/item.component';
import { VeradoNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { VeradoNavVerticalGroupComponent } from './vertical/group/group.component';
import { VeradoNavHorizontalItemComponent } from './horizontal/item/item.component';
import { VeradoNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        VeradoNavigationComponent
    ],
    declarations: [
        VeradoNavigationComponent,
        VeradoNavVerticalGroupComponent,
        VeradoNavVerticalItemComponent,
        VeradoNavVerticalCollapsableComponent,
        VeradoNavHorizontalItemComponent,
        VeradoNavHorizontalCollapsableComponent
    ]
})
export class VeradoNavigationModule
{
}
