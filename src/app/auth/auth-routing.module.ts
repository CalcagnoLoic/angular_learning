import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const route: Routes = [{ path: 'auth/login', component: LoginComponent }];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
