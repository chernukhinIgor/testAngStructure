//module
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaskedTextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
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
        ButtonsModule,
        InputsModule,
        LayoutModule,
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
