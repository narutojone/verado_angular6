import { Component, HostBinding, Input } from '@angular/core';

import { VeradoNavigationItem } from '../../../../types';

@Component({
    selector   : 'verado-nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class VeradoNavVerticalGroupComponent
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: VeradoNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }

}
