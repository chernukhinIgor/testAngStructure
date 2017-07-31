import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from "@angular/forms";
import { NgModule }             from '@angular/core';

import { AppComponent }         from '../components/app.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
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
