import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from "@angular/forms";
import { NgModule }             from '@angular/core';

import { AppComponent }         from '../components/app.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ButtonsModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
