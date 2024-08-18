import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeSectionsComponent } from './home-sections/home-sections.component';
import { MembersPageComponent } from './tabs/members-Tab/members-page/members-page.component';
import { FacilitiesPageComponent } from './tabs/club-Tab/facilities-page/facilities-page.component';
import { HistoryPageComponent } from './tabs/club-Tab/history-page/history-page.component';
import { HandballPageComponent } from './tabs/sports-Tab/handball-page/handball-page.component';
import { VolleyballPageComponent } from './tabs/sports-Tab/volleyball-page/volleyball-page.component';
import { CyclingPageComponent } from './tabs/sports-Tab/cycling-page/cycling-page.component';
import { ZumbaPageComponent } from './tabs/activities-Tab/zumba-page/zumba-page.component';
import { ArtisticRollerskatingPageComponent } from './tabs/activities-Tab/artistic-rollerskating-page/artistic-rollerskating-page.component';
import { WeightRoomPageComponent } from './tabs/activities-Tab/weight-room-page/weight-room-page.component';
import { FitnessPageComponent } from './tabs/activities-Tab/fitness-page/fitness-page.component';
import { YogaPageComponent } from './tabs/activities-Tab/yoga-page/yoga-page.component';
import { NewsPageComponent } from './tabs/news-Tab/news-page/news-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: HomeSectionsComponent,
      },
      {
        path: 'historia',
        component: HistoryPageComponent,
      },
      {
        path: 'instalaciones',
        component: FacilitiesPageComponent,
      },
      {
        path: 'socios',
        component: MembersPageComponent,
      },
      {
        path: 'deportes/handball',
        component: HandballPageComponent,
      },
      {
        path: 'deportes/volleyball',
        component: VolleyballPageComponent,
      },
      {
        path: 'deportes/ciclismo',
        component: CyclingPageComponent,
      },
      {
        path: 'actividades/zumba',
        component: ZumbaPageComponent,
      },
      {
        path: 'actividades/patinajeArtistico',
        component: ArtisticRollerskatingPageComponent,
      },
      {
        path: 'actividades/salaDeMusculacion',
        component: WeightRoomPageComponent,
      },
      {
        path: 'actividades/fitness',
        component: FitnessPageComponent,
      },
      {
        path: 'actividades/yoga',
        component: YogaPageComponent,
      },
      {
        path: 'noticias',
        component: NewsPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
