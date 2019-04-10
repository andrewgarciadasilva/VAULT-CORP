import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { NavModule } from '../nav/nav.module';
import { SharedModule } from '../shared/modules/shared.module';




@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        NavModule,
        SharedModule
    ],
    exports: [
        MainComponent
    ]
})

export class MainModule { }
