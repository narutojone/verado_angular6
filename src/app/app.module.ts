import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { VeradoModule } from '@verado/verado.module';
import { VeradoSharedModule } from '@verado/shared.module';
import { VeradoProgressBarModule, VeradoSidebarModule } from '@verado/components';

import { veradoConfig } from './verado-config';

import { FakeDbService } from './fake-db/fake-db.service';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { LayoutModule } from './layout/layout.module';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/chat'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Verado modules
        VeradoModule.forRoot(veradoConfig),
        VeradoProgressBarModule,
        VeradoSharedModule,
        VeradoSidebarModule,

        // App modules
        LayoutModule,
        AppStoreModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
