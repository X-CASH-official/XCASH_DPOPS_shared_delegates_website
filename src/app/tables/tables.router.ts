import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksfoundComponent } from './blocksfound/blocksfound.component';
import { ProcessednamesComponent } from './processednames/processednames.component';
import { VoterslistComponent } from './voterslist/voterslist.component';
import { VoterstatisticsComponent } from './voterstatistics/voterstatistics.component';

const materialWidgetRoutes: Routes = [
        { path: '', component: BlocksfoundComponent , data: { animation: 'fixed' }},
        { path: 'list', component: VoterslistComponent , data: { animation: 'fixed' }},
        { path: 'statistics', component: VoterstatisticsComponent , data: { animation: 'fixed' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}
