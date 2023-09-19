import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceSnapListComponent } from './core/components/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './core/components/single-face-snap/single-face-snap.component';

const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class appRoutingModule {}
