import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        NgbModule
    ],
    exports: [
        NgbModule,
        CommonModule
    ]
})

export class SharedModule { }
