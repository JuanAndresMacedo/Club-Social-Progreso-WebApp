import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoonPageComponent } from './soon-page/soon-page.component';

const routes: Routes = [
  {
    path: '',
    component: SoonPageComponent,
    children: [
      {
        path: 'proximamente',
        component: SoonPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
