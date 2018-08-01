import { Component } from '@angular/core';

import { veradoAnimations } from '@verado/animations';

@Component({
    selector   : 'chat-start',
    templateUrl: './chat-start.component.html',
    styleUrls  : ['./chat-start.component.scss'],
    animations : veradoAnimations
})
export class ChatStartComponent
{
    constructor()
    {
    }
}
