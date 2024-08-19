import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { SoonPageComponent } from './soon-page/soon-page.component';
import { ButtonComponent } from '../../components/button/button.component';


@NgModule({
  declarations: [
    SoonPageComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ButtonComponent
  ]
})
export class MemberModule { }
