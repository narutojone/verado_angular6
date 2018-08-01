import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

import { VeradoConfigService } from '@verado/services/config.service';
import { VeradoNavigationService } from '@verado/components/navigation/navigation.service';
import { VeradoPerfectScrollbarDirective } from '@verado/directives/verado-perfect-scrollbar/verado-perfect-scrollbar.directive';
import { VeradoSidebarService } from '@verado/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-vertical-style-1',
    templateUrl  : './style-1.component.html',
    styleUrls    : ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy
{
    veradoConfig: any;
    veradoPerfectScrollbarUpdateTimeout: any;
    navigation: any;

    // Private
    private _veradoPerfectScrollbar: VeradoPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {VeradoConfigService} _veradoConfigService
     * @param {VeradoNavigationService} _veradoNavigationService
     * @param {VeradoSidebarService} _veradoSidebarService
     * @param {Router} _router
     */
    constructor(
        private _veradoConfigService: VeradoConfigService,
        private _veradoNavigationService: VeradoNavigationService,
        private _veradoSidebarService: VeradoSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(VeradoPerfectScrollbarDirective)
    set directive(theDirective: VeradoPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._veradoPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._veradoNavigationService.onItemCollapseToggled
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.veradoPerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this._veradoPerfectScrollbar.update();
                }, 310);
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        const activeNavItem: any = document.querySelector('navbar .nav-link.active');

                        if ( activeNavItem )
                        {
                            const activeItemOffsetTop       = activeNavItem.offsetTop,
                                  activeItemOffsetParentTop = activeNavItem.offsetParent.offsetTop,
                                  scrollDistance            = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3) - 168;

                            this._veradoPerfectScrollbar.scrollToTop(scrollDistance);
                        }
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._veradoSidebarService.getSidebar('navbar') )
                    {
                        this._veradoSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Subscribe to the config changes
        this._veradoConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.veradoConfig = config;
            });

        // Get current navigation
        this._veradoNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._veradoNavigationService.getCurrentNavigation();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        if ( this.veradoPerfectScrollbarUpdateTimeout )
        {
            clearTimeout(this.veradoPerfectScrollbarUpdateTimeout);
        }

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._veradoSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._veradoSidebarService.getSidebar('navbar').toggleFold();
    }
}
