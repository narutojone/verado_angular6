import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { VERADO_CONFIG } from './services/config.service';

@NgModule()
export class VeradoModule
{
    constructor(@Optional() @SkipSelf() parentModule: VeradoModule)
    {
        if ( parentModule )
        {
            throw new Error('VeradoModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : VeradoModule,
            providers: [
                {
                    provide : VERADO_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
