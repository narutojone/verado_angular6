import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VeradoConfigService } from '@verado/services/config.service';
import { VeradoNavigationService } from '@verado/components/navigation/navigation.service';
import { VeradoSidebarService } from '@verado/components/sidebar/sidebar.service';
import { VeradoSplashScreenService } from '@verado/services/splash-screen.service';

import { navigation } from './navigation/navigation';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    veradoConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {VeradoConfigService} _veradoConfigService
     * @param {VeradoNavigationService} _veradoNavigationService
     * @param {VeradoSidebarService} _veradoSidebarService
     * @param {VeradoSplashScreenService} _veradoSplashScreenService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _veradoConfigService: VeradoConfigService,
        private _veradoNavigationService: VeradoNavigationService,
        private _veradoSidebarService: VeradoSidebarService,
        private _veradoSplashScreenService: VeradoSplashScreenService,
        private _platform: Platform
    )
    {
        // Get default navigation
        this.navigation = navigation;

        // Register the navigation to the service
        this._veradoNavigationService.register('main', this.navigation);

        // Set the main navigation as our current navigation
        this._veradoNavigationService.setCurrentNavigation('main');

        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._veradoConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.veradoConfig = config;

                if ( this.veradoConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void
    {
        this._veradoSidebarService.getSidebar(key).toggleOpen();
    }
}
