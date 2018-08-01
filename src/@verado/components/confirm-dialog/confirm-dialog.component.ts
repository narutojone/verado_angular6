import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'verado-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class VeradoConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<VeradoConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<VeradoConfirmDialogComponent>
    )
    {
    }

}
