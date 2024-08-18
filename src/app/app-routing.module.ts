import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./member/member.module').then((m) => m.MemberModule),
  },
  {
    path: '',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
