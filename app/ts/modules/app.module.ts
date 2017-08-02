//module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaskedTextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

//pages
import { NotFound } from '../pages/notfound';
import { Home } from '../pages/home';

//components
import { Tab1Component } from '../components/tab1.component';
import { AppComponent } from '../components/app.component';


const appRoutes: Routes = [
    { path: '', component: Home },
    { path: '**', component: NotFound }
];


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        NumericTextBoxModule,
        MaskedTextBoxModule,
        DateInputsModule,
        ButtonsModule,
        InputsModule,
        LayoutModule,
        PopupModule,
        FormsModule
    ],
    declarations: [
        //pages
        NotFound,
        Home,

        //components
        Tab1Component,
        AppComponent,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
