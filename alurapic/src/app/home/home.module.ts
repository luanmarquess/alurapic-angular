import { HomeRountingModule } from './home.routing.module';
import { SignUpComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignUpService } from './signup/signup.services';

@NgModule({
    declarations: [
      SignInComponent,
      SignUpComponent,
      HomeComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRountingModule
    ],

    providers : [
      SignUpService
    ]
})
export class HomeModule { }
