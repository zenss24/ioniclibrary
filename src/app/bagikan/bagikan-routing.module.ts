import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BagikanPage } from './bagikan.page';

const routes: Routes = [
  {
    path: '',
    component: BagikanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagikanPageRoutingModule {}
