import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammesPageComponent } from './programmes-page.component';

const routes: Routes = [{ path: '', component: ProgrammesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammesPageRoutingModule {}
