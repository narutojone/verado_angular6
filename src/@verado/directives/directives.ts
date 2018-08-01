import { NgModule } from '@angular/core';

import { VeradoIfOnDomDirective } from './verado-if-on-dom/verado-if-on-dom.directive';
import { VeradoInnerScrollDirective } from './verado-inner-scroll/verado-inner-scroll.directive';
import { VeradoPerfectScrollbarDirective } from './verado-perfect-scrollbar/verado-perfect-scrollbar.directive';
import { VeradoMatSidenavHelperDirective, VeradoMatSidenavTogglerDirective } from './verado-mat-sidenav/verado-mat-sidenav.directive';

@NgModule({
    declarations: [
        VeradoIfOnDomDirective,
        VeradoInnerScrollDirective,
        VeradoMatSidenavHelperDirective,
        VeradoMatSidenavTogglerDirective,
        VeradoPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        VeradoIfOnDomDirective,
        VeradoInnerScrollDirective,
        VeradoMatSidenavHelperDirective,
        VeradoMatSidenavTogglerDirective,
        VeradoPerfectScrollbarDirective
    ]
})
export class VeradoDirectivesModule
{
}
