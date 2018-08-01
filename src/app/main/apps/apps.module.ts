import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VeradoSharedModule } from '@verado/shared.module';

const routes = [
    {
        path        : 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        VeradoSharedModule
    ]
})
export class AppsModule
{
}
