import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './core/components/face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './core/components/face-snap-list/face-snap-list.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { appRoutingModule } from './app.routing-module';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './core/components/single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './core/components/new-face-snap/new-face-snap.component';

@NgModule({
    declarations: [
        AppComponent,
        FaceSnapComponent,
        FaceSnapListComponent,
        HeaderComponent,
        FooterComponent,
        LandingPageComponent,
        SingleFaceSnapComponent,
        NewFaceSnapComponent,
    ],
    imports: [
        BrowserModule,
        appRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        registerLocaleData(fr.default);
    }
}
