import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { VeradoConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    declarations: [
        VeradoConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        VeradoConfirmDialogComponent
    ],
})
export class VeradoConfirmDialogModule
{
}
