import { Component, HostBinding, Input } from '@angular/core';

import { VeradoNavigationItem } from '../../../../types';

@Component({
    selector   : 'verado-nav-vertical-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class VeradoNavVerticalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: VeradoNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
